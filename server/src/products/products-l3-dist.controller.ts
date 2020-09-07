import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { ProductsController } from './products.controller';
import { ErrorDto } from 'src/errors/errors.dto';
import { ProductL3Dist } from './product-l3-dist.entity';
import { ProductL3DistDto } from './dto/product-l3-dist.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL3Src } from './product-l3-src.entity';
import { ProductL3DistHistoryView } from './product-l3-dist-history-view.entity';
import { ProductL3SrcHistoryView } from './product-l3-src-history-view.entity';

@ApiTags('products/l3-dist')
@Controller('products/l3-dist')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class ProductsL3DistController extends ProductsController<ProductL3Dist, ProductL3DistHistoryView, ProductL3DistDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL3Dist, ProductL3DistHistoryView, productsService)
  }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  @ApiQuery({
    name: 'filterByProductSrcId',
    required: false,
    type: Number
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown, @Query('filterByProductSrcId') filterByProductSrcId: number | undefined): Promise<ProductL3Dist[]> {
    if (snapshotDateTime)
    {
      const prod = await this.productsService.findAll<ProductL3DistHistoryView>(this.productHistoryType, snapshotDateTime, filterByProductSrcId );
      const eagerL3SrcCandidates = await this.productsService.findAll<ProductL3SrcHistoryView>(ProductL3SrcHistoryView, snapshotDateTime );
      prod.forEach(productDist => productDist.sourceProduct = eagerL3SrcCandidates.find(productSrc => productSrc.id===productDist.sourceProduct))
      return prod as unknown as ProductL3Dist[];
    }
    else
    {
      return this.productsService.findAll<ProductL3Dist>(this.productType, snapshotDateTime, filterByProductSrcId)
    }
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL3Dist> {
    return this.productsService.findOne<ProductL3Dist>(this.productType, productId);
  }

  @Post()
  @ApiBody({ type: ProductL3DistDto })
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async create (@Body(new ClassValidationPipe()) product: ProductL3DistDto, @Query('productL3SrcId', new ParseIntPipe()) productL3SrcId: number) {
    const productLink = await this.productsService.findOne<ProductL3Src>(ProductL3Src, productL3SrcId);
    return this.productsService.create<ProductL3Dist, ProductL3DistDto>(this.productType, product, "sourceProduct", productLink);
  }

  @Put(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) updateProductDto: ProductL3DistDto) {
    return this.productsService.update<ProductL3Dist, ProductL3DistDto>(this.productType, productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  delete (@Param('productId', new ParseIntPipe()) productId: number): Promise<void> {
    return this.productsService.delete<ProductL3Dist>(this.productType, productId);
  }
}
