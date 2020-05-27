import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from './product.entity';
import { Survey } from "src/surveys/survey.entity";

@Entity()
export class ProductL3Src implements Product {

  /**
   * The autogenerated id for the product
   *
   * @type {number}
   * @memberof Product
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Unique identifier for reference purposes
   *
   * @type {string}
   * @memberof Product
   */
  @Column()
  uuid: string;

  /**
   * Name of product for display purposes - from gazeteer
   *
   * @type {string}
   * @memberof Product
   */
  @Column()
  name: string;

  /**
   * Spatial Reference of product
   *
   * @type {string}
   * @memberof Product
   */
  @Column()
  srs: string;

  /**
   * Persistent Id of the metadata product
   *
   * @type {string}
   * @memberof Product
   */
  @Column()
  metadataPersistentId: string;

  /**
   * Resolution of product for display purposes
   *
   * @type {string}
   * @memberof ProductL3Src
   */
  @Column()
  resolution: string;

  /**
   * Location of final product
   *
   * @type {string}
   * @memberof ProductL3Src
   */
  @Column()
  productTifLocation: string;

}