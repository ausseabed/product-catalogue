import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductL3Src } from "src/products/product-l3-src.entity";
import { Composite } from "src/composites/composite.entity";

@Entity()
export class CompositeL3Relation {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Composite, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  composite: Composite;

  @ManyToOne(type => ProductL3Src, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  productL3Src: ProductL3Src;
}