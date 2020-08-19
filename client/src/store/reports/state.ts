import { ProductL3Dist } from '@ausseabed/product-catalogue-rest-client'

export interface ReportsStateInterface {
  productL3Dists: [ProductL3Dist] | undefined;
  fileExists: undefined | {
    bathymetryLocation:{ product: ProductL3Dist; exists: boolean}[];
    hillshadeLocation:{ product: ProductL3Dist; exists: boolean}[];
    l3CoverageLocation:{ product: ProductL3Dist; exists: boolean}[];
  }
}

const state: ReportsStateInterface = {
  productL3Dists: undefined,
  fileExists: { bathymetryLocation: [], hillshadeLocation: [], l3CoverageLocation: [] }
}

export default state
