import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductL0Src } from "src/products/product-l0-src.entity";
import { Survey } from "src/surveys/survey.entity";

@Entity()
export class SurveyL0Relation {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Survey, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  survey: Survey;

  @ManyToOne(type => ProductL0Src, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  productL3Src: ProductL0Src;
}