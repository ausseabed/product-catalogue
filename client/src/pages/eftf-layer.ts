import { ObservableProductsL3DistApi, ObservableProductsL3SrcApi, ObservableProductRelationsApi, ObservableSurveysApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { getRestConfiguration } from 'src/boot/auth'
import { ProductL3Dist, ProductL3Src, RelationSummaryDto, Survey } from '@ausseabed/product-catalogue-rest-client'
import * as eftfStructure from '../statics/eftf_structure.json'
import { useNamespaces } from 'xpath'
import { DOMParser } from 'xmldom'

type BBoxFields = 'minx' | 'miny' | 'maxx' | 'maxy'
type BBox = { 'minx': string; 'miny': string; 'maxx': string; 'maxy': string }

export class EftfLayer {
  constructor(private geoserver: string) {
    this.geoserver = geoserver
    this.geoserverCapabilities = geoserver + '/ows?service=wms&version=1.3.0&request=GetCapabilities'
    this.geoserverWCS = geoserver + '/wcs'
    this.geoserverWMS = geoserver + '/wms'
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
      minx: '0', miny: '0', maxx: '0', maxy: '0'
    }
    const select = useNamespaces({ x: 'http://www.opengis.net/wms' })

    const fields: BBoxFields[] = ['minx', 'miny', 'maxx', 'maxy']
    fields.forEach(key => {
      const query = './x:BoundingBox[@CRS="CRS:84"]/@' + key
      const result = select(query, layer, true) as Attr

      bbox[key] = result.value
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

  async getLayerDefinitionsFile (): Promise<Blob> {
    const productL3DistArray = await this.getPublishedL3SurveyProducts()
    const productL3RelationsArray = await this.getSurveyL3Relations()
    const surveysArray = await this.getSurveys()
    const productToSurvey = new Map<number, number>(productL3RelationsArray.map(i => [i.productId, i.surveyId]))
    const surveyIdToSurvey = new Map<number, Survey>(surveysArray.map(i => [i.id, i]))

    const nameLookup: { name: string; surveyId: number; productDistId: number; productSrcId: number }[] = []

    productL3DistArray.forEach(product => {
      const productSrcId = productToSurvey.get(product.sourceProduct.id)
      if (productSrcId) {
        const survey = surveyIdToSurvey.get(productSrcId)
        if (survey) {
          const nameFormatted = `${product.sourceProduct.name} ${survey.year} ${product.sourceProduct.resolution}`
          nameLookup.push({
            name: nameFormatted,
            surveyId: survey.id,
            productDistId: product.id,
            productSrcId: productSrcId
          })
        }
      }
    })

    const nameToNode: Map<string, Node> = await this.getNameToNode()
    const defaultEftf = Object.create(eftfStructure).default
    defaultEftf['WMS URL'] = this.geoserverWMS
    defaultEftf['WCS URL'] = this.geoserverWCS
    const namespace = 'ausseabed:'
    const outputs: any[] = [] // array of json eftf structure
    nameLookup.forEach((record) => {
      const layer = nameToNode.get(namespace + record.name)
      if (layer) {
        const eftfBase = Object.assign({}, defaultEftf)
        eftfBase.NAME = record.name
        eftfBase['WMS LAYER NAMES'] = record.name
        eftfBase['WCS LAYER NAMES'] = namespace + record.name + ' OV'
        const bbox = this.getBoundingBox(layer)
        eftfBase.xmax = bbox.maxx
        eftfBase.xmin = bbox.minx
        eftfBase.ymax = bbox.maxy
        eftfBase.ymin = bbox.miny
        outputs.push(eftfBase)
      }
    })

    const fields = Object.keys(defaultEftf)
    const replacer = function (key: string, value: string) { return value === null ? '' : value }
    const csvArray = outputs.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csvArray.unshift(fields.join(',')) // add header column
    const csv = csvArray.join('\r\n')
    return new Blob([csv], { type: 'text/plain;charset=utf-8' })
  }
}
