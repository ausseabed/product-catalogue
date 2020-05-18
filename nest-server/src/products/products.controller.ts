import { Controller, Get, Put, Delete, Body, Req, Param, Post } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { ProductL0SrcDto } from './dto/product-l0-src.dto';

export class ProductsController<T extends Product, ProductDtoType> {
  constructor(
    protected productType: new () => T,
    protected productsService: ProductsService,
  ) {
  }

  // @Get()
  // async findAll (): Promise<T[]> {
  //   return this.productsService.findAll<T>(this.productType);
  // }

  // @Get(':productId')
  // async findOne (@Req() request: Request, @Param('productId') productId: string): Promise<T> {
  //   return this.productsService.findOne<T>(this.productType, productId)
  // }

  // @Post('')
  // @ApiBody({ type: ProductL0SrcDto })
  // create (@Body() product: ProductDtoType) {
  //   return this.productsService.create<T, ProductDtoType>(this.productType, product);
  // }
  // @Put(':productId')
  // update (@Param('productId') productId: string, @Body() updateProductDto: ProductDtoType) {
  //   return this.productsService.update<T, ProductDtoType>(this.productType, productId, updateProductDto);
  // }

  // @Delete(':productId')
  // delete (@Param('productId') productId: string): Promise<void> {
  //   return this.productsService.delete<T>(this.productType, productId);
  // }

}
