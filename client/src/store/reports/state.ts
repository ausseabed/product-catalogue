import { ProductL3Dist, ProductL3Src } from '@ausseabed/product-catalogue-rest-client'

export interface ReportsStateInterface {
  productL3Dists: [ProductL3Dist] | undefined;
  productL3Srcs: [ProductL3Src] | undefined;
  fileExists: undefined | {
    srcTifLocation:{ product: ProductL3Src; exists: boolean}[];
    bathymetryLocation:{ product: ProductL3Dist; exists: boolean}[];
    hillshadeLocation:{ product: ProductL3Dist; exists: boolean}[];
    l3CoverageLocation:{ product: ProductL3Dist; exists: boolean}[];
  };
}

const state: ReportsStateInterface = {
  productL3Dists: undefined,
  fileExists: { srcTifLocation: [], bathymetryLocation: [], hillshadeLocation: [], l3CoverageLocation: [] },
  productL3Srcs: undefined
}

export default state
