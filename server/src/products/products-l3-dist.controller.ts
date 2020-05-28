import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ProductsController } from './products.controller';
import { ProductL3Dist } from './product-l3-dist.entity';
import { ProductL3DistDto } from './dto/product-l3-dist.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL3Src } from './product-l3-src.entity';

@ApiTags('products/l3-dist')
@Controller('products/l3-dist')
@ApiBearerAuth('access-token')
export class ProductsL3DistController extends ProductsController<ProductL3Dist, ProductL3DistDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL3Dist, productsService)
  }

  @Get()
  async findAll (): Promise<ProductL3Dist[]> {
    return this.productsService.findAll<ProductL3Dist>(this.productType);
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL3Dist> {
    return this.productsService.findOne<ProductL3Dist>(this.productType, productId)
  }

  @Post()
  @ApiBody({ type: ProductL3DistDto })
  create (@Body(new ClassValidationPipe()) product: ProductL3DistDto, @Query('productL3SrcId', new ParseIntPipe()) productL3SrcId: number) {
    const productLink = this.productsService.findOne<ProductL3Src>(ProductL3Src, productL3SrcId)
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
