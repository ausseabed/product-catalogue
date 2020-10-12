import { ProductL3Dist, ProductL3Src, Survey } from '@ausseabed/product-catalogue-rest-client'

export interface ReportsStateInterface {
  productL3Dists: [ProductL3Dist] | undefined;
  productL3Srcs: [ProductL3Src] | undefined;
  surveys: [Survey] | undefined;
  fileExists: undefined | {
    srcTifLocation:{ product: ProductL3Src; exists: boolean}[];
    productBagLocation:{ product: ProductL3Src; exists: boolean}[];
    bathymetryLocation:{ product: ProductL3Dist; exists: boolean}[];
    hillshadeLocation:{ product: ProductL3Dist; exists: boolean}[];
    l3CoverageLocation:{ product: ProductL3Dist; exists: boolean}[];
  };
  polygonArea: {
    productL3Dist: ProductL3Dist;
    lastModified: Date;
    area: number;
  }[];
}

const state: ReportsStateInterface = {
  productL3Dists: undefined,
  surveys: undefined,
  fileExists: { srcTifLocation: [], productBagLocation: [], bathymetryLocation: [], hillshadeLocation: [], l3CoverageLocation: [] },
  productL3Srcs: undefined,
  polygonArea: []
}

export default state
