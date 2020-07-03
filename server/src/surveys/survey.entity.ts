import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiHideProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

@Entity()
export class Survey {

  /**
   * Numerical identifier for keeping track of records
   *
   * @type {number}
   * @memberof Survey
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Unique identifier for reference purposes
   *
   * @type {string}
   * @memberof Survey
   */
  @Column()
  uuid: string;

  /**
   * Name of product for display purposes - from gazeteer
   * 
   * @type {string}
   * @memberof Survey
   */
  @Column()
  name: string;

  /**
   * Year of product for display purposes
   *
   * @type {string}
   * @memberof Survey
   */
  @Column()
  year: string;

  @ApiHideProperty()
  @Exclude()
  @Column("tstzrange", {
    default: () =>
      "tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)"
  })
  sysPeriod: any;
}
