import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductL0Dist } from "./product-l0-dist.entity";
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from "class-transformer";

@Entity()
export class ProductL0InstrumentFile {
  @ApiProperty({type:'integer'})
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  l0InstrumentFile: string; // Location of instrument files 

  @ApiHideProperty()
  @ManyToOne(type => ProductL0Dist, productL0Dist => productL0Dist.l0InstrumentFiles, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  productL0Dist: ProductL0Dist;

  @ApiHideProperty()
  @Exclude()
  @Column("tstzrange", {
    default: () =>
      "tstzrange(CURRENT_TIMESTAMP, NULL::timestamp with time zone)",
  })
  sysPeriod: any;
}


