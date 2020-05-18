import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductL3Src } from "src/products/product-l3-src.entity";
import { Survey } from "src/surveys/survey.entity";

@Entity()
export class SurveyL3Relation {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Survey, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  survey: Survey;

  @ManyToOne(type => ProductL3Src, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  productL3Src: ProductL3Src;
}