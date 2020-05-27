import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager, FindConditions, FindOperator } from 'typeorm';
import { Product } from './product.entity';

import { plainToClassFromExist, plainToClass } from "class-transformer";
import { ProductL0InstrumentFile } from './product-l0-instrument-file.entity';
import { ProductL0Dist } from './product-l0-dist.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectEntityManager()
    private productsEntityManager: EntityManager

  ) {

  }

  async findAll<T> (productType: new () => T): Promise<T[]> {
    return this.productsEntityManager.find<T>(productType);

  }


  async findInstrumentsForProduct (productId: number): Promise<ProductL0InstrumentFile[]> {
    let productL0Dist = this.findOne<ProductL0Dist>(ProductL0Dist, productId)
    return this.productsEntityManager.find<ProductL0InstrumentFile>(ProductL0InstrumentFile,
      {
        relations: ["productL0Dist"],
        where: {
          productL0Dist: productL0Dist
        }
      });
  }

  async findInstrument (instrumentId: number): Promise<ProductL0InstrumentFile> {
    return this.productsEntityManager.findOne<ProductL0InstrumentFile>(ProductL0InstrumentFile,
      {
        where: {
          id: instrumentId
        }
      });
  }

  async findOne<T> (productType: new () => T, id: number): Promise<T> {
    return this.productsEntityManager.findOneOrFail<T>(productType, id).catch(() => {
      throw new BadRequestException(`Could not find survey for id ${id}.`)
    });
  }

  create<T, ProductDtoType> (productType: new () => T, createProductDto: ProductDtoType, fieldName?: string, fieldValue?: any) {
    let product = productType;
    let productEntry = plainToClass(product, createProductDto);
    if (fieldName && fieldValue) {
      productEntry[fieldName] = fieldValue
    }
    return this.productsEntityManager.save<T>(productEntry);
  }

  async update<T, ProductDtoType> (productType: new () => T, id: number, updateProductDto: ProductDtoType): Promise<void> {
    let product = await this.findOne(productType, id);
    let productEntry = plainToClassFromExist(product, updateProductDto);
    await this.productsEntityManager.save<T>(productEntry);
  }

  async delete<T> (productType: new () => T, id: number): Promise<void> {
    await this.productsEntityManager.delete<T>(productType, id);
  }
}
