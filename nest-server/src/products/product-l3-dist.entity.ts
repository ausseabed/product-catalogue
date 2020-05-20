import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from './product.entity';
import { Survey } from "src/surveys/survey.entity";
import { ProductL3Src } from "./product-l3-src.entity";

@Entity()
export class ProductL3Dist implements Product {

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
   * Persistent Id of metadata product
   *
   * @type {string}
   * @memberof Product
   */
  @Column()
  metadataPersistentId: string;

  /**
   * Location of the L3 polygon shapefile
   *
   * @type {string}
   * @memberof ProductL3Dist
   */
  @Column()
  l3CoverageLocation: string; // Location of shapefile 

  /**
   * Location of the raster bathymetry
   *
   * @type {string}
   * @memberof ProductL3Dist
   */
  @Column()
  bathymetryLocation: string;

  /**
   * Location of the hillshade associated with the raster
   *
   * @type {string}
   * @memberof ProductL3Dist
   */
  @Column()
  hillshadeLocation: string; // S3 location

  /**
  * Reference to the source data for this distribution
  *
  * @type {Survey}
  * @memberof Product
  */
  @ManyToOne(type => ProductL3Src)
  sourceProduct: ProductL3Src;

}