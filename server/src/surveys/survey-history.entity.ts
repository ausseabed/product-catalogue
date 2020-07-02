import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { ApiHideProperty } from "@nestjs/swagger";

@Entity()
export class SurveyHistory {
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
