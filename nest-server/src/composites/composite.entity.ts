import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Composite {

  /**
   * Numerical identifier for keeping track of records
   *
   * @type {number}
   * @memberof Composite
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Unique identifier for reference purposes
   *
   * @type {string}
   * @memberof Composite
   */
  @Column()
  uuid: string;

  /**
   * Name of product for display purposes - from gazeteer
   * 
   * @type {string}
   * @memberof Composite
   */
  @Column()
  name: string;

  /**
   * Year of product for display purposes
   *
   * @type {string}
   * @memberof Composite
   */
  @Column()
  year: string;

}