/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ObservableProductsL3DistApi, ObservableProductsL3SrcApi, ObservableProductRelationsApi, ObservableSurveysApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { ProductL3Dist, ProductL3Src, RelationSummaryDto, Survey, Configuration } from '@ausseabed/product-catalogue-rest-client'
import * as eftfStructure from '../lib/eftf_structure.json'
import * as eCatStructure from '../lib/ecat_structure.json'
import { useNamespaces } from 'xpath'
import { PortalNaming } from './portal_naming'
import { S3Util } from '../lib/s3-util'
type BBoxFields = 'minx' | 'miny' | 'maxx' | 'maxy'
type BBox = { 'minx': number; 'miny': number; 'maxx': number; 'maxy': number }

/**
 * The EftfLayer class builds csv files that the EFTF Portal can use for presenting
 * layers from the Warehouse
 */
export class EftfLayer {
  constructor (private geoserver: string, private geoserverProduction: string, private collapseGroups: boolean,
    private snapshotEndDate: string, private snapshotPreviousDate: string, private configuration: Configuration,
    private metadataChanges: boolean) {
    this.geoserver = geoserver
    this.geoserverProduction = geoserverProduction
    this.geoserverCapabilities = geoserver + '/ows?service=wms&version=1.3.0&request=GetCapabilities'
    this.geoserverWCS = geoserver + '/wcs'
    this.geoserverWMS = geoserver + '/ows'
    this.collapseGroups = collapseGroups
    this.snapshotEndDate = snapshotEndDate
    this.snapshotPreviousDate = snapshotPreviousDate
    this.configuration = configuration
    this.metadataChanges = metadataChanges
  }

  private geoserverCapabilities: string
  private geoserverWMS: string
  private geoserverWCS: string

  // Should we use Layer Groups or should we use a comma separated list of layers
  useLayerGroups = true

  async getPublishedL3SurveyProducts (snapshotDateTime: string | undefined): Promise<ProductL3Dist[]> {
    const productsL3DistApi = new ObservableProductsL3DistApi(this.configuration)
    return productsL3DistApi.productsL3DistControllerFindAll(undefined, snapshotDateTime).toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getL3SrcProducts (snapshotDateTime: string | undefined): Promise<ProductL3Src[]> {
    const productsL3SrcApi = new ObservableProductsL3SrcApi(this.configuration)
    return productsL3SrcApi.productsL3SrcControllerFindAll(snapshotDateTime).toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getSurveyL3Relations (snapshotDateTime: string | undefined): Promise<RelationSummaryDto[]> {
    const productRelationsApi = new ObservableProductRelationsApi(this.configuration)
    return productRelationsApi.productRelationsControllerFindAllL3Survey(snapshotDateTime).toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getSurveys (snapshotDateTime: string | undefined): Promise<Survey[]> {
    const surveyApi = new ObservableSurveysApi(this.configuration)
    return surveyApi.surveysControllerFindAll(snapshotDateTime).toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getGeoserverCapabilities (): Promise<Document> {
    const xml = await fetch(this.geoserverCapabilities)
      .then(res => res.text())
      .then(str => (new DOMParser()).parseFromString(str, 'text/xml'))
      .catch(err => { throw err })

    return xml
  }

  getBoundingBox (layer: Node): BBox {
    const bbox: BBox = {
      minx: 0.0, miny: 0.0, maxx: 0.0, maxy: 0.0
    }
    const select = useNamespaces({ x: 'http://www.opengis.net/wms' })

    const fields: BBoxFields[] = ['minx', 'miny', 'maxx', 'maxy']
    fields.forEach(key => {
      const query = './x:BoundingBox[@CRS="CRS:84"]/@' + key
      const result = select(query, layer, true) as Attr

      bbox[key] = parseFloat(result.value)
    }
    )
    return bbox
  }

  async getNameToNode (): Promise<Map<string, Node>> {
    const xml = await this.getGeoserverCapabilities()
    const query = '/x:WMS_Capabilities/x:Capability/x:Layer/x:Layer'
    const select = useNamespaces({ x: 'http://www.opengis.net/wms' })
    const result = select(query, xml)
    const nameToNode: Map<string, Node> = new Map<string, Node>()
    result.forEach(selectedValue => {
      const recordName = select('./x:Name/text()', selectedValue.valueOf() as Node, true) as Text

      if (recordName && recordName.textContent) {
        nameToNode.set(recordName.textContent, selectedValue.valueOf() as Node)
      }
    })
    return nameToNode
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async generateLayerDefinitions (snapshotDateTime: string | undefined, eftfStructureHeaders: any): Promise<any[]> {
    const productL3DistArrayWithNonEllipsoid = await this.getPublishedL3SurveyProducts(snapshotDateTime)
    const productL3RelationsArrayNonEllipsoid = await this.getSurveyL3Relations(snapshotDateTime)
    const surveysArray = await this.getSurveys(snapshotDateTime)

    // Remove non-ellipsoid products once an ellipsoid product becomes available
    // That is: for a survey, if there is a single ellipsoid (WGS84) product, then
    // there should be no reference on the portal to products that are Mean Sea Level
    const ellipsoidProducts = productL3DistArrayWithNonEllipsoid.filter(i => i.sourceProduct.verticalDatum === 'WGS84').map(i => i.sourceProduct.id)
    const ellipsoidSurveyIds = productL3RelationsArrayNonEllipsoid.filter(relation => ellipsoidProducts.includes(relation.productId as number)).map(i => i.surveyId as number)
    const ellipsoidProductRelations = productL3RelationsArrayNonEllipsoid.filter(relation => ellipsoidSurveyIds.includes(relation.surveyId)).map(i => i.productId as number)
    const nonEllipsoidProducts = productL3DistArrayWithNonEllipsoid.filter(
      i => i.sourceProduct.verticalDatum !== 'WGS84' && ellipsoidProductRelations.includes(i.sourceProduct.id)).map(i => i.id)
    const productL3DistArray = productL3DistArrayWithNonEllipsoid.filter(i => !nonEllipsoidProducts.includes(i.id))
    const productL3RelationsArray = productL3RelationsArrayNonEllipsoid.filter(i => !nonEllipsoidProducts.includes(i.productId))
    // End remove

    const productIdToProductSrc = new Map<number, ProductL3Src>(productL3DistArray.map(i => [i.sourceProduct.id, i.sourceProduct]))
    const productIdToProductDist = new Map<number, ProductL3Dist>(productL3DistArray.map(i => [i.sourceProduct.id, i]))

    const surveyToProduct = productL3RelationsArray.reduce<Map<number, number[]>>(
      (previousMap, relationsSummaryDto) => previousMap.set(
        relationsSummaryDto.surveyId, [...previousMap.get(relationsSummaryDto.surveyId) || [],
          relationsSummaryDto.productId]),
      new Map()
    )

    const nameToNode: Map<string, Node> = await this.getNameToNode()
    const namespace = 'ausseabed:'
    const outputs: unknown[] = [] // array of json eftf structure

    surveysArray.forEach((survey: Survey) => {
      const productIds = surveyToProduct.get(survey.id)
      if (productIds) {
        const productsWithOutDistributables = productIds.filter(id => !productIdToProductSrc.get(id))
        if (productsWithOutDistributables.length > 0) {
          console.warn('Products without distributables for ' + survey.name)
        }
        if (this.collapseGroups) {
          const productsWithDistributables = productIds.filter(id => productIdToProductSrc.get(id))
          const surveyNameToProducts = productsWithDistributables.reduce<Map<string, number[]>>(
            (previousMap, productId) => previousMap.set(
              PortalNaming.getNameSurvey(survey, productIdToProductSrc.get(productId), survey.year), [...previousMap
                .get(PortalNaming.getNameSurvey(survey, productIdToProductSrc.get(productId), survey.year)) || [],
              productId]),
            new Map()
          )
          surveyNameToProducts.forEach((productsWithDistributables: number[], nameFormatted: string) => {
            const wcsLayerNames = productsWithDistributables.map(prodId => {
              return namespace + PortalNaming.getNcName(PortalNaming.getNameIndividual(productIdToProductSrc.get(prodId), survey.year) + '_OV')
            })

            const wmsLayerNamesByProduct = productsWithDistributables.map(prodId => {
              const productName = PortalNaming.getNameIndividual(productIdToProductSrc.get(prodId), survey.year)
              const productNames = {
                bathy: namespace + PortalNaming.getNcName(productName + '_OV'),
                hillshade: namespace + PortalNaming.getNcName(productName + '_HS'),
                poly: namespace + PortalNaming.getNcName(productName + '_L0_Coverage')
              }
              return productNames
            })
            const wmsLayerNamesByType = wmsLayerNamesByProduct.map(prod => prod.poly).concat(
              wmsLayerNamesByProduct.map(prod => prod.hillshade)
            ).concat(
              wmsLayerNamesByProduct.map(prod => prod.bathy)
            )

            const bboxes = productsWithDistributables.map(prodId => {
              const nameIndividualFormatted = namespace + PortalNaming.getNcName(PortalNaming.getNameIndividual(productIdToProductSrc.get(prodId), survey.year))
              const layer = nameToNode.get(nameIndividualFormatted)
              if (layer) {
                return this.getBoundingBox(layer)
              } else {
                return null
              }
            })

            const bboxesNotNull = bboxes.filter(x => { return x !== null })
            if (bboxesNotNull.length < bboxes.length) {
              console.log(`missing bbox for ${nameFormatted}`)
              console.log(`${bboxesNotNull.length} vs ${bboxes.length}`)
              return
            }

            const eftfBase = Object.assign({}, eftfStructureHeaders)
            if (productsWithDistributables.length === 1) {
              const prodFirstId = productsWithDistributables[0]
              const productL3Src = productIdToProductSrc.get(prodFirstId)
              const nameIndividualFormatted = PortalNaming.getNameIndividual(productL3Src, survey.year)
              eftfBase.NAME = nameIndividualFormatted
            } else {
              eftfBase.NAME = nameFormatted
            }
            if (this.useLayerGroups) {
              eftfBase['WMS LAYER NAMES'] = namespace + PortalNaming.getNcName(nameFormatted)
            } else {
              eftfBase['WMS LAYER NAMES'] = wmsLayerNamesByType.join(',')
            }
            eftfBase['WCS LAYER NAMES'] = wcsLayerNames.join(',')

            // replace with bboxes extent
            const maxx = bboxesNotNull.map(val => { return val!.maxx })
            const minx = bboxesNotNull.map(val => { return val!.minx })
            const maxy = bboxesNotNull.map(val => { return val!.maxy })
            const miny = bboxesNotNull.map(val => { return val!.miny })

            eftfBase.xmax = Math.max(...maxx)
            eftfBase.xmin = Math.min(...minx)
            eftfBase.ymax = Math.max(...maxy)
            eftfBase.ymin = Math.min(...miny)
            eftfBase.PRODUCTION = this.geoserverProduction
            outputs.push(eftfBase)
          })
        } else {
          productIds.forEach((prodId: number) => {
            const productL3Src = productIdToProductSrc.get(prodId)
            const productL3Dist = productIdToProductDist.get(prodId)
            if (productL3Src && productL3Dist) {
              const nameFormatted = PortalNaming.getNameIndividual(productL3Src, survey.year)
              const layer = nameToNode.get(namespace + PortalNaming.getNcName(nameFormatted))
              if (layer) {
                const eftfBase = Object.assign({}, eftfStructureHeaders)
                eftfBase.NAME = nameFormatted
                eftfBase['WMS LAYER NAMES'] = namespace + PortalNaming.getNcName(nameFormatted)
                eftfBase['WCS LAYER NAMES'] = namespace + PortalNaming.getNcName(nameFormatted) + '_OV'
                const bbox = this.getBoundingBox(layer)
                eftfBase.xmax = bbox.maxx
                eftfBase.xmin = bbox.minx
                eftfBase.ymax = bbox.maxy
                eftfBase.ymin = bbox.miny
                eftfBase.PRODUCTION = this.geoserverProduction
                outputs.push(eftfBase)
              }
            }
          })
        }
      }
    })
    return outputs
  }

  async getLayerDefinitionsFile (): Promise<Blob> {
    const eftfStructureHeaders = Object.create(eftfStructure).default
    eftfStructureHeaders['WMS URL'] = this.geoserverWMS
    eftfStructureHeaders['WCS URL'] = this.geoserverWCS

    const snapshotEnd = await this.generateLayerDefinitions(this.snapshotEndDate, eftfStructureHeaders)
    const snapshotPrevious = await this.generateLayerDefinitions(this.snapshotPreviousDate, eftfStructureHeaders)

    console.log(`Found ${snapshotEnd.length} entries at end of period`)
    console.log(`Found ${snapshotPrevious.length} entries at start of period`)

    const fields = Object.keys(eftfStructureHeaders)
    const replacer = function (key: string, value: string) { return value === null ? '' : value }

    const csvArrayEnd = snapshotEnd.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })

    const csvArrayPrevious = snapshotPrevious.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })

    const csvArray = csvArrayEnd.filter(val => !csvArrayPrevious.find(myval => myval === val))

    csvArray.sort()
    csvArray.unshift(fields.join(',')) // add header column
    const csv = csvArray.join('\r\n')
    return new Blob([csv], { type: 'text/plain;charset=utf-8' })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async generateEcatDefinitions (snapshotDateTime: string | undefined, eCatStructure: any): Promise<any[]> {
    const productL3DistArray = await this.getPublishedL3SurveyProducts(snapshotDateTime)
    const productL3RelationsArray = await this.getSurveyL3Relations(snapshotDateTime)
    const surveysArray = await this.getSurveys(snapshotDateTime)

    const productIdToProductSrc = new Map<number, ProductL3Src>(productL3DistArray.map(i => [i.sourceProduct.id, i.sourceProduct]))
    const productIdToProductDist = new Map<number, ProductL3Dist>(productL3DistArray.map(i => [i.sourceProduct.id, i]))

    const surveyToProduct = productL3RelationsArray.reduce<Map<number, number[]>>(
      (previousMap, relationsSummaryDto) => previousMap.set(
        relationsSummaryDto.surveyId, [...previousMap.get(relationsSummaryDto.surveyId) || [],
          relationsSummaryDto.productId]),
      new Map()
    )

    const outputs: unknown[] = [] // array of json eftf structure

    await Promise.all(
      surveysArray.map(async (survey: Survey) => {
        const productIds = surveyToProduct.get(survey.id)
        if (productIds) {
          const productsWithOutDistributables = productIds.filter(id => !productIdToProductSrc.get(id))
          if (productsWithOutDistributables.length > 0) {
            console.warn('Products without distributables for ' + survey.name)
          }

          await Promise.all(
            productIds.map(
              async (prodId: number) => {
                const productL3Src = productIdToProductSrc.get(prodId)
                const productL3Dist = productIdToProductDist.get(prodId)
                if (productL3Src && productL3Dist) {
                  const nameFormatted = PortalNaming.getNameIndividual(productL3Src, survey.year)
                  const ecatBase = Object.assign({}, eCatStructure)
                  const bucketkeypair = S3Util.getBucketFromS3Uri(productL3Dist.bathymetryLocation)
                  if (bucketkeypair) {
                    ecatBase['File Size'] = await S3Util.getS3ObjectMeta(bucketkeypair)
                    ecatBase['Source file'] = S3Util.getHttpsUrl(bucketkeypair)
                  } else {
                    ecatBase['File Size'] = ''
                    ecatBase['Source file'] = ''
                  }
                  if (ecatBase['File Size'] === '') {
                    console.log(`Could not find product for dist id: ${productL3Dist.id}`)
                  }
                  ecatBase['Survey Name'] = survey.name
                  ecatBase['PMP Record'] = ''
                  ecatBase['ecat Record'] = productL3Src.metadataPersistentId
                  ecatBase['ecat Disply Name'] = nameFormatted
                  ecatBase['Survey ID'] = survey.uuid
                  ecatBase['Date Sent to Dataman'] = ''

                  outputs.push(ecatBase)
                }
              })
          )
        }
      })
    )
    return outputs
  }

  async getEcatFileDefinition (): Promise<Blob> {
    const ecatStructureHeaders = Object.create(eCatStructure).default

    const snapshotEnd = await this.generateEcatDefinitions(this.snapshotEndDate, ecatStructureHeaders)
    const snapshotPrevious = await this.generateEcatDefinitions(this.snapshotPreviousDate, ecatStructureHeaders)

    console.log(`Found ${snapshotEnd.length} entries at end of period`)
    console.log(`Found ${snapshotPrevious.length} entries at start of period`)

    const fields = Object.keys(ecatStructureHeaders)
    const replacer = function (key: string, value: string) { return value === null ? '' : value }

    const csvArrayEnd = snapshotEnd.map(function (row) {
      return {
        Source: row['Source file'],
        Data: fields.map(function (fieldName) {
          return JSON.stringify(row[fieldName], replacer)
        }).join(',')
      }
    })

    const csvArrayPrevious = snapshotPrevious.map(function (row) {
      return {
        Source: row['Source file'],
        Data: fields.map(function (fieldName) {
          return JSON.stringify(row[fieldName], replacer)
        }).join(',')
      }
    })

    const csvArray = (
      this.metadataChanges ? csvArrayEnd.filter(val => !csvArrayPrevious.find(myval => myval.Data === val.Data)).map(record => record.Data)
        : csvArrayEnd.filter(val => !csvArrayPrevious.find(myval => myval.Source === val.Source)).map(record => record.Data)
    )

    csvArray.sort()
    csvArray.unshift(fields.join(',')) // add header column
    const csv = csvArray.join('\r\n')
    return new Blob([csv], { type: 'text/plain;charset=utf-8' })
  }
}
