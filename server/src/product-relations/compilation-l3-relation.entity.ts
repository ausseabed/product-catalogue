import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductL3Src } from "src/products/product-l3-src.entity";
import { Compilation } from "src/compilations/compilation.entity";
import { ApiHideProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

@Entity()
export class CompilationL3Relation {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Compilation, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true
  })
  compilation: Compilation;

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
  sysPeriod: string
}
