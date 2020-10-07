import { Product } from './product.entity';
import { ProductsService } from './products.service';

export class ProductsController<T extends Product, HistoryT, ProductDtoType> {
  constructor(
    protected productType: new () => T,
    protected productHistoryType: new () => HistoryT,
    protected productsService: ProductsService,
  ) {
  }
}
