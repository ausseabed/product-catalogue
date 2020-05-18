import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse } from '@nestjs/swagger';
import { ProductsController } from './products.controller';
import { ProductL0Src } from './product-l0-src.entity';
import { ProductL0SrcDto } from './dto/product-l0-src.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';

@ApiTags('products/l0-src')
@Controller('products/l0-src')
export class ProductsL0SrcController extends ProductsController<ProductL0Src, ProductL0SrcDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL0Src, productsService)
  }

  @Get()
  async findAll (): Promise<ProductL0Src[]> {
    return this.productsService.findAll<ProductL0Src>(this.productType);
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL0Src> {
    return this.productsService.findOne<ProductL0Src>(this.productType, productId)
  }

  @Post('')
  @ApiBody({ type: ProductL0SrcDto })
  create (@Body(new ClassValidationPipe()) product: ProductL0SrcDto) {
    return this.productsService.create<ProductL0Src, ProductL0SrcDto>(this.productType, product);
  }
  @Put(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) updateProductDto: ProductL0SrcDto) {
    return this.productsService.update<ProductL0Src, ProductL0SrcDto>(this.productType, productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  delete (@Param('productId', new ParseIntPipe()) productId: number): Promise<void> {
    return this.productsService.delete<ProductL0Src>(this.productType, productId);
  }
}
