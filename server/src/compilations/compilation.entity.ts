import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Exclude } from "class-transformer";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


export class CompilationBase {


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

  @ApiHideProperty()
  @Exclude()
  @Column({
    name:"sys_period",
    type:"tstzrange",
    nullable:false,
    default: () => "tstzrange(CURRENT_TIMESTAMP, NULL)" 
  })
  sys_period: any;
}


@Entity()
export class Compilation extends CompilationBase{
  /**
   * Numerical identifier for keeping track of records
   *
   * @type {number}
   * @memberof Compilation
   */
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: 'integer' })
  id: number;
}

@Entity()
export class CompilationHistory extends CompilationBase{
  /**
   * Numerical identifier for keeping entity records
   *
   * @type {number}
   */
  @Column({nullable:false})
  id: number;

  /**
   * Numerical identifier for keeping history records
   *
   * @type {number}
   */
  @Exclude()
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  historyId: number;
}
