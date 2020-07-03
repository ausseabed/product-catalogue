import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, FindConditions, Raw } from 'typeorm';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { SurveyL3Relation } from './survey-l3-relation.entity';
import { Survey } from 'src/surveys/survey.entity';
import { ProductL3Src } from 'src/products/product-l3-src.entity';
import { RelationSummaryDto } from './dto/relation-summary.dto';

@Injectable()
export class ProductRelationsService {
  constructor(@InjectEntityManager()
  private productsEntityManager: EntityManager
  ) {

  }

  async findAllProduct<R, S, P> (relationType: new () => R, surveyType: new () => S, productType: new () => P, 
  joinRelationName: string, snapshotDateTime: Date| unknown): Promise<RelationSummaryDto[]> {
    // replace with entityManager.query('SELECT u.name FROM users AS u WHERE u.name = $1 AND u.lastName = $2', ['John', 'Doe']);
    if (snapshotDateTime)
    {
      const results = await this.productsEntityManager.createQueryBuilder<R>(relationType, "relation")
        .innerJoin(surveyType, "survey", "survey.id = relation.\"surveyId\"")
        .innerJoin(productType, "product", `product.id = relation.\"${joinRelationName}\"`)
        .select(["survey.id", "relation.id", "product.id", "product.name"])
        .where({
            sysPeriod: Raw(alias =>`${alias} @> '${snapshotDateTime}'::timestamptz`)
          }
        ).orderBy("survey.id","ASC")
        .addOrderBy("relation.id","ASC")
        .addOrderBy("product.id","ASC")
        .printSql()
        .getRawMany();             
      return results;
    }
    else
    {
      const results = await this.productsEntityManager.createQueryBuilder<R>(relationType, "relation")
        .innerJoin(surveyType, "survey", "survey.id = relation.\"surveyId\"")
        .innerJoin(productType, "product", `product.id = relation.\"${joinRelationName}\"`)
        .select(["survey.id", "relation.id", "product.id", "product.name"])
        .orderBy("survey.id","ASC")
        .addOrderBy("relation.id","ASC")
        .addOrderBy("product.id","ASC")
        .printSql()
        .getRawMany();
      return results;
    }
  }

  async findConditional<T> (productType: new () => T, conditions: FindConditions<T>): Promise<T> {
    return this.productsEntityManager.findOneOrFail<T>(
      productType,
      { where: conditions })
      .catch(() => {
        throw new BadRequestException(`Could not find survey for conditions ${JSON.stringify(conditions)}.`)
      });;
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
