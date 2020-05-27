import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Compilation {

  /**
   * Numerical identifier for keeping track of records
   *
   * @type {number}
   * @memberof Compilation
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Unique identifier for reference purposes
   *
   * @type {string}
   * @memberof Compilation
   */
  @Column()
  uuid: string;

  /**
   * Name of product for display purposes - from gazeteer
   * 
   * @type {string}
   * @memberof Compilation
   */
  @Column()
  name: string;

  /**
   * Year of product for display purposes
   *
   * @type {string}
   * @memberof Compilation
   */
  @Column()
  year: string;

}
