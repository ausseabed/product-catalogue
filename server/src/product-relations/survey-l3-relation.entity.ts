import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductL3Src } from "src/products/product-l3-src.entity";
import { Survey } from "src/surveys/survey.entity";
import { ApiHideProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

@Entity()
export class SurveyL3Relation {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Survey, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  survey: Survey;

  @ManyToOne(type => ProductL3Src, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  productL3Src: ProductL3Src;

  @ApiHideProperty()
  @Exclude()
  @Column("tstzrange", {
    default: () =>
      "tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)",
  })
  sysPeriod: string;
}
