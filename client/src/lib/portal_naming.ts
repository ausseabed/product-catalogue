import { ProductL3Src, Survey } from '@ausseabed/product-catalogue-rest-client'

export class PortalNaming {
  static SLASH_I_LESS_COLON = 'A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD'
  static SLASH_C_LESS_COLON = '-0-9A-Z_a-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD'

  static getNcName (label: string) {
    const reSlashI = new RegExp('^[^' + this.SLASH_I_LESS_COLON + ']')
    const reSlashC = new RegExp('[^' + this.SLASH_C_LESS_COLON + ']', 'g')
    return label.replace(reSlashC, '_').replace(reSlashI, '_')
  }

  static getNameIndividual (productL3Src: ProductL3Src | undefined, year: string): string {
    if (productL3Src) {
      return `${productL3Src.name} ${year} ${productL3Src.resolution}`
    } else {
      console.error('Could not find product')
      return 'unknown'
    }
  }

  static getNameSurvey (survey: Survey | undefined, productL3Src: ProductL3Src | undefined, year: string): string {
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
}
