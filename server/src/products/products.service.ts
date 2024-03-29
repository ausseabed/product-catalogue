import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, Raw } from 'typeorm';

import { plainToClassFromExist, plainToClass } from "class-transformer";
import { ProductL0InstrumentFile } from './product-l0-instrument-file.entity';
import { ProductL0Dist } from './product-l0-dist.entity';
import { Style } from './style.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectEntityManager()
    private productsEntityManager: EntityManager

  ) {

  }

  async findAll<T> (productType: new () => T, snapshotDateTime: Date| unknown, filterByProductSrcId?: number): Promise<T[]> {
    if (snapshotDateTime) {
      if (filterByProductSrcId)
      {
        const products = this.productsEntityManager.find<T>(productType, 
        {
          where: {
            sysPeriod: Raw(alias =>`${alias} @> '${snapshotDateTime}'::timestamptz`),
            sourceProduct: filterByProductSrcId 
          }          
        }
        );
      return products;
      }
      else {
      const products = this.productsEntityManager.find<T>(productType, 
        {
          where: {
            sysPeriod: Raw(alias =>`${alias} @> '${snapshotDateTime}'::timestamptz`)
          }          
        }
        );
      return products;
      }
    }
    else {
      if (filterByProductSrcId)
      {
        return this.productsEntityManager.find<T>(productType, { where: { sourceProduct: filterByProductSrcId  } });
      }
      else
      {
        return this.productsEntityManager.find<T>(productType);
      }
    }
  }


  async findInstrumentsForProduct (productId: number): Promise<ProductL0InstrumentFile[]> {
    const productL0Dist = this.findOne<ProductL0Dist>(ProductL0Dist, productId)
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

  async findAvailableStyles<T>(productType: new () => T, productId: number): Promise<Style[]> {
    const styles: Style[] = await this.productsEntityManager.createQueryBuilder()
        .relation(productType, 'availableStyles')
        .of(productId)
        .loadMany();

    styles.sort((a, b) => a.id.localeCompare(b.id));

    return styles;
  }

  async findOne<T> (productType: new () => T, id: number): Promise<T> {
    return this.productsEntityManager.findOneOrFail<T>(productType, id).catch(() => {
      throw new BadRequestException(`Could not find survey for id ${id}.`)
    });
  }

  create<T, ProductDtoType> (productType: new () => T, createProductDto: ProductDtoType, fieldName?: string, fieldValue?: any) {
    const product = productType;
    const productEntry = plainToClass(product, createProductDto);
    if (fieldName && fieldValue) {
      productEntry[fieldName] = fieldValue
    }
    return this.productsEntityManager.save<T>(productEntry);
  }

  async update<T, ProductDtoType> (productType: new () => T, id: number, updateProductDto: ProductDtoType): Promise<void> {
    const product = await this.findOne(productType, id);
    const productEntry = plainToClassFromExist(product, updateProductDto);
    await this.productsEntityManager.save<T>(productEntry);
  }

  async delete<T> (productType: new () => T, id: number): Promise<void> {
    await this.productsEntityManager.delete<T>(productType, id);
  }
}
