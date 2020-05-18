import { Module } from '@nestjs/common';
import { ProductRelationsService } from './product-relations.service';
import { ProductRelationsController } from './product-relations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompositeL3Relation } from './composite-l3-relation.entity';
import { SurveyL3Relation } from './survey-l3-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompositeL3Relation, SurveyL3Relation])],
  providers: [ProductRelationsService],
  controllers: [ProductRelationsController]
})
export class ProductRelationsModule { }
