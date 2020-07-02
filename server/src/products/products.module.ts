import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductL0Dist } from './product-l0-dist.entity';
import { ProductL0Src } from './product-l0-src.entity';
import { ProductL3Dist } from './product-l3-dist.entity';
import { ProductL3Src } from './product-l3-src.entity';
import { ProductL0InstrumentFile } from './product-l0-instrument-file.entity';
import { ProductsL0SrcController } from './products-l0-src.controller';
import { ProductL0SrcDto } from './dto/product-l0-src.dto';
import { ProductsL3SrcController } from './products-l3-src.controller';
import { ProductsL0DistController } from './products-l0-dist.controller';
import { ProductsL3DistController } from './products-l3-dist.controller';
import { ProductL3DistHistory } from './product-l3-dist-history.entity';
import { ProductL0DistHistory } from './product-l0-dist-history.entity';
import { ProductL0SrcHistory } from './product-l0-src-history.entity';
import { ProductL3SrcHistory } from './product-l3-src-history.entity';
import { ProductL0InstrumentFileHistory } from './product-l0-instrument-file-history.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductL3Dist, ProductL0Dist, ProductL0Src,
    ProductL3Src, ProductL0InstrumentFile, ProductL3DistHistory, ProductL0DistHistory, ProductL0SrcHistory,
    ProductL3SrcHistory, ProductL0InstrumentFileHistory])],
  controllers: [ProductsL0SrcController, ProductsL3SrcController, ProductsL0DistController, ProductsL3DistController],
  providers: [ProductsService],
})
export class ProductsModule { }
