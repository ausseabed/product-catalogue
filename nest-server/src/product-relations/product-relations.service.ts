import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { plainToClass, plainToClassFromExist } from 'class-transformer';

@Injectable()
export class ProductRelationsService {
  constructor(@InjectEntityManager()
  private productsEntityManager: EntityManager
  ) {

  }

  async findOne<T> (productType: new () => T, id: number): Promise<T> {
    return this.productsEntityManager.findOneOrFail<T>(productType, id).catch(() => {
      throw new BadRequestException(`Could not find survey for id ${id}.`)
    });
  }

  create<T, ProductDtoType> (productType: new () => T, createProductDto: ProductDtoType) {
    let product = productType;
    let productEntry = plainToClass(product, createProductDto);
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
