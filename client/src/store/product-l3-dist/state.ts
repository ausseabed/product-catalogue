import { ProductL3Dist } from '@ausseabed/product-catalogue-rest-client'

export interface ProductL3DistStateInterface {
  productL3Dist: ProductL3Dist | undefined;
}

const state: ProductL3DistStateInterface = {
  productL3Dist: undefined
}

export default state
