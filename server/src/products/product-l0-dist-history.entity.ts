import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { ApiHideProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

@Entity()
export class ProductL0DistHistory {
  @Column()
  uuid: string;

  @Column()
  name: string;

  @Column()
  year: string;

  @ApiHideProperty()
  @Exclude()
  @Column("tstzrange", { nullable: false })
  sysPeriod: string;

  @Column()
  id: number;

  @ApiHideProperty()
  @Exclude()
  @PrimaryGeneratedColumn()
  historyId: number;
}
