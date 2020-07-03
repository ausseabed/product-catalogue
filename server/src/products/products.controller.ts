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
}
