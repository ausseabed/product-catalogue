import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductL2Src } from "src/products/product-l2-src.entity";
import { Survey } from "src/surveys/survey.entity";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

@Entity()
export class SurveyL2Relation {

  @ApiProperty({type:'integer'})
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Survey, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  survey: Survey;

  @ManyToOne(type => ProductL2Src, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  productL2Src: ProductL2Src;

  @ApiHideProperty()
  @Exclude()
  @Column("tstzrange", {
    default: () =>
      "tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)",
  })
  sysPeriod: any;
}
