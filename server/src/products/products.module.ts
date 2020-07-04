import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductL0Dist } from './product-l0-dist.entity';
import { ProductL0Src } from './product-l0-src.entity';
import { ProductL3Dist } from './product-l3-dist.entity';
import { ProductL3Src } from './product-l3-src.entity';
import { ProductL0InstrumentFile } from './product-l0-instrument-file.entity';
import { ProductsL0SrcController } from './products-l0-src.controller';
import { ProductsL3SrcController } from './products-l3-src.controller';
import { ProductsL0DistController } from './products-l0-dist.controller';
import { ProductsL3DistController } from './products-l3-dist.controller';
import { ProductL3DistHistoryView } from './product-l3-dist-history-view.entity';
import { ProductL0DistHistoryView } from './product-l0-dist-history-view.entity';
import { ProductL0SrcHistoryView } from './product-l0-src-history-view.entity';
import { ProductL3SrcHistoryView } from './product-l3-src-history-view.entity';
import { ProductL0InstrumentFileHistoryView } from './product-l0-instrument-file-history-view.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductL3Dist, ProductL0Dist, ProductL0Src,
    ProductL3Src, ProductL0InstrumentFile, ProductL3DistHistoryView, ProductL0DistHistoryView, ProductL0SrcHistoryView,
    ProductL3SrcHistoryView, ProductL0InstrumentFileHistoryView ])],
  controllers: [ProductsL0SrcController, ProductsL3SrcController, ProductsL0DistController, ProductsL3DistController],
  providers: [ProductsService],
})
export class ProductsModule { }
