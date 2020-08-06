/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ObservableProductsL3DistApi, ObservableProductsL3SrcApi, ObservableProductRelationsApi, ObservableSurveysApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { ProductL3Dist, ProductL3Src, RelationSummaryDto, Survey, Configuration } from '@ausseabed/product-catalogue-rest-client'
import * as eftfStructure from '../statics/eftf_structure.json'
import * as eCatStructure from '../statics/ecat_structure.json'
import { useNamespaces } from 'xpath'
import { DOMParser } from 'xmldom'
import { S3Util } from '../components/s3-util'
type BBoxFields = 'minx' | 'miny' | 'maxx' | 'maxy'
type BBox = { 'minx': number; 'miny': number; 'maxx': number; 'maxy': number }

export class EftfLayer {
  constructor (private geoserver: string, private geoserverProduction: string, private collapseGroups: boolean,
    private snapshotEndDate: string, private snapshotPreviousDate: string, private configuration: Configuration) {
    this.geoserver = geoserver
    this.geoserverProduction = geoserverProduction
    this.geoserverCapabilities = geoserver + '/ows?service=wms&version=1.3.0&request=GetCapabilities'
    this.geoserverWCS = geoserver + '/wcs'
    this.geoserverWMS = geoserver + '/ows'
    this.collapseGroups = collapseGroups
    this.snapshotEndDate = snapshotEndDate
    this.snapshotPreviousDate = snapshotPreviousDate
    this.configuration = configuration
  }

  private geoserverCapabilities: string
  private geoserverWMS: string
  private geoserverWCS: string

  async getPublishedL3SurveyProducts (snapshotDateTime: string | undefined): Promise<ProductL3Dist[]> {
    const productsL3DistApi = new ObservableProductsL3DistApi(this.configuration)
    return productsL3DistApi.productsL3DistControllerFindAll(snapshotDateTime).toPromise()
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
      const recordName = select('./x:Name/text()', selectedValue.valueOf() as Node, true)
      nameToNode.set(recordName.toString(), selectedValue.valueOf() as Node)
    })
    return nameToNode
  }

  SLASH_I_LESS_COLON = 'A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD'
  SLASH_C_LESS_COLON = '-0-9A-Z_a-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD'

  getNcName (label: string) {
    const reSlashI = new RegExp('^[^' + this.SLASH_I_LESS_COLON + ']')
    const reSlashC = new RegExp('[^' + this.SLASH_C_LESS_COLON + ']', 'g')
    return label.replace(reSlashC, '_').replace(reSlashI, '_')
  }

  getNameIndividual (productL3Src: ProductL3Src | undefined, year: string): string {
    if (productL3Src) {
      return `${productL3Src.name} ${year} ${productL3Src.resolution}`
    } else {
      console.error('Could not find product')
      return 'unknown'
    }
  }

  getNameSurvey (survey: Survey | undefined, productL3Src: ProductL3Src | undefined, year: string): string {
    if (productL3Src && survey) {
      return `${survey.name} ${year} ${productL3Src.resolution}`
    } else {
      if (survey) {
        console.error('Could not find product for survey: ' + survey.name)
        return 'unknown'
      } else if (productL3Src) {
        throw Error('Could not find survey for product: ' + productL3Src.name)
      } else {
        throw Error('Could not find product')
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async generateLayerDefinitions (snapshotDateTime: string | undefined, eftfStructureHeaders: any): Promise<any[]> {
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
              this.getNameSurvey(survey, productIdToProductSrc.get(productId), survey.year), [...previousMap
                .get(this.getNameSurvey(survey, productIdToProductSrc.get(productId), survey.year)) || [],
              productId]),
            new Map()
          )
          surveyNameToProducts.forEach((productsWithDistributables: number[], nameFormatted: string) => {
            const wcsLayerNames = productsWithDistributables.map(prodId => {
              return namespace + this.getNcName(this.getNameIndividual(productIdToProductSrc.get(prodId), survey.year) + '_OV')
            })

            const bboxes = productsWithDistributables.map(prodId => {
              const nameIndividualFormatted = namespace + this.getNcName(this.getNameIndividual(productIdToProductSrc.get(prodId), survey.year))
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
            eftfBase.NAME = nameFormatted
            eftfBase['WMS LAYER NAMES'] = namespace + this.getNcName(nameFormatted)
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
              const nameFormatted = this.getNameIndividual(productL3Src, survey.year)
              const layer = nameToNode.get(namespace + this.getNcName(nameFormatted))
              if (layer) {
                const eftfBase = Object.assign({}, eftfStructureHeaders)
                eftfBase.NAME = nameFormatted
                eftfBase['WMS LAYER NAMES'] = namespace + this.getNcName(nameFormatted)
                eftfBase['WCS LAYER NAMES'] = namespace + this.getNcName(nameFormatted) + '_OV'
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
                  const nameFormatted = this.getNameIndividual(productL3Src, survey.year)
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
}
