import { ObservableProductsL3DistApi, ObservableProductsL3SrcApi, ObservableProductRelationsApi, ObservableSurveysApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { getRestConfiguration } from 'src/boot/auth'
import { ProductL3Dist, ProductL3Src, RelationSummaryDto, Survey } from '@ausseabed/product-catalogue-rest-client'
import * as eftfStructure from '../statics/eftf_structure.json'
import { useNamespaces } from 'xpath'
import { DOMParser } from 'xmldom'

type BBoxFields = 'minx' | 'miny' | 'maxx' | 'maxy'
type BBox = { 'minx': number; 'miny': number; 'maxx': number; 'maxy': number }

export class EftfLayer {
  constructor (private geoserver: string, private geoserverProduction: string, private collapseGroups: boolean) {
    this.geoserver = geoserver
    this.geoserverProduction = geoserverProduction
    this.geoserverCapabilities = geoserver + '/ows?service=wms&version=1.3.0&request=GetCapabilities'
    this.geoserverWCS = geoserver + '/wcs'
    this.geoserverWMS = geoserver + '/ows'
    this.collapseGroups = collapseGroups
  }

  private geoserverCapabilities: string
  private geoserverWMS: string
  private geoserverWCS: string

  async getPublishedL3SurveyProducts (): Promise<ProductL3Dist[]> {
    const productsL3DistApi = new ObservableProductsL3DistApi(getRestConfiguration(undefined))
    return productsL3DistApi.productsL3DistControllerFindAll().toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getL3SrcProducts (): Promise<ProductL3Src[]> {
    const productsL3SrcApi = new ObservableProductsL3SrcApi(getRestConfiguration(undefined))
    return productsL3SrcApi.productsL3SrcControllerFindAll().toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getSurveyL3Relations (): Promise<RelationSummaryDto[]> {
    const productRelationsApi = new ObservableProductRelationsApi(getRestConfiguration(undefined))
    return productRelationsApi.productRelationsControllerFindAllL3Survey().toPromise()
      .catch(reason => {
        console.error(reason)
        return []
      })
  }

  async getSurveys (): Promise<Survey[]> {
    const surveyApi = new ObservableSurveysApi(getRestConfiguration(undefined))
    return surveyApi.surveysControllerFindAll().toPromise()
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

  getNameIndividual (productL3Src: ProductL3Src | undefined, year: string): string {
    if (productL3Src) {
      return `${productL3Src.name} ${year} ${productL3Src.resolution}`.replace(',', '_')
    } else {
      throw Error('Could not find product')
    }
  }

  getNameSurvey (survey: Survey | undefined, productL3Src: ProductL3Src | undefined, year: string): string {
    if (productL3Src && survey) {
      return `${survey.name} ${year} ${productL3Src.resolution}`.replace(',', '_')
    } else {
      throw Error('Could not find product')
    }
  }

  async getLayerDefinitionsFile (): Promise<Blob> {
    const productL3DistArray = await this.getPublishedL3SurveyProducts()
    const productL3RelationsArray = await this.getSurveyL3Relations()
    const surveysArray = await this.getSurveys()
    const productIdToProductSrc = new Map<number, ProductL3Src>(productL3DistArray.map(i => [i.sourceProduct.id, i.sourceProduct]))
    const productIdToProductDist = new Map<number, ProductL3Dist>(productL3DistArray.map(i => [i.sourceProduct.id, i]))

    const surveyToProduct = productL3RelationsArray.reduce<Map<number, number[]>>(
      (previousMap, relationsSummaryDto) => previousMap.set(
        relationsSummaryDto.surveyId, [...previousMap.get(relationsSummaryDto.surveyId) || [],
          relationsSummaryDto.productId]),
      new Map()
    )

    const nameToNode: Map<string, Node> = await this.getNameToNode()
    const defaultEftf = Object.create(eftfStructure).default
    defaultEftf['WMS URL'] = this.geoserverWMS
    defaultEftf['WCS URL'] = this.geoserverWCS
    const namespace = 'ausseabed:'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const outputs: any[] = [] // array of json eftf structure

    surveysArray.forEach((survey: Survey) => {
      const productIds = surveyToProduct.get(survey.id)
      if (productIds) {
        if (this.collapseGroups) {
          const surveyNameToProducts = productIds.reduce<Map<string, number[]>>(
            (previousMap, productId) => previousMap.set(
              this.getNameSurvey(survey, productIdToProductSrc.get(productId), survey.year), [...previousMap
                .get(this.getNameSurvey(survey, productIdToProductSrc.get(productId), survey.year)) || [],
              productId]),
            new Map()
          )
          surveyNameToProducts.forEach((productIds: number[], nameFormatted: string) => {
            const wmsLayerNames = productIds.map(prodId => {
              return namespace + this.getNameIndividual(productIdToProductSrc.get(prodId), survey.year)
            })
            const wcsLayerNames = productIds.map(prodId => {
              return namespace + this.getNameIndividual(productIdToProductSrc.get(prodId), survey.year) + ' OV'
            })

            const bboxes = productIds.map(prodId => {
              const nameIndividualFormatted = namespace + this.getNameIndividual(productIdToProductSrc.get(prodId), survey.year)
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

            const eftfBase = Object.assign({}, defaultEftf)
            eftfBase.NAME = nameFormatted
            eftfBase['WMS LAYER NAMES'] = wmsLayerNames.join(',')
            eftfBase['WCS LAYER NAMES'] = wcsLayerNames.join(',')

            // replace with bboxes extent
            const maxx = bboxesNotNull.map(val => { return val!.maxx })
            const minx = bboxesNotNull.map(val => { return val!.minx })
            const maxy = bboxesNotNull.map(val => { return val!.maxy })
            const miny = bboxesNotNull.map(val => { return val!.miny })

            eftfBase.xmax = Math.max(...maxx)
            eftfBase.xmin = Math.max(...minx)
            eftfBase.ymax = Math.max(...maxy)
            eftfBase.ymin = Math.max(...miny)
            eftfBase.PRODUCTION = this.geoserverProduction
            outputs.push(eftfBase)
          })
        } else {
          productIds.forEach((prodId: number) => {
            const productL3Src = productIdToProductSrc.get(prodId)
            const productL3Dist = productIdToProductDist.get(prodId)
            if (productL3Src && productL3Dist) {
              const nameFormatted = this.getNameIndividual(productL3Src, survey.year)
              const layer = nameToNode.get(namespace + nameFormatted)
              if (layer) {
                const eftfBase = Object.assign({}, defaultEftf)
                eftfBase.NAME = nameFormatted
                eftfBase['WMS LAYER NAMES'] = namespace + nameFormatted
                eftfBase['WCS LAYER NAMES'] = namespace + nameFormatted + ' OV'
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

    const fields = Object.keys(defaultEftf)
    const replacer = function (key: string, value: string) { return value === null ? '' : value }
    const csvArray = outputs.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csvArray.sort()
    csvArray.unshift(fields.join(',')) // add header column
    const csv = csvArray.join('\r\n')
    return new Blob([csv], { type: 'text/plain;charset=utf-8' })
  }
}
