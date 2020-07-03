import { Module } from '@nestjs/common';
import { ProductRelationsService } from './product-relations.service';
import { ProductRelationsController } from './product-relations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompilationL3Relation } from './compilation-l3-relation.entity';
import { SurveyL3Relation } from './survey-l3-relation.entity';
import { SurveyL0Relation } from './survey-l0-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompilationL3Relation, SurveyL3Relation, SurveyL0Relation ])],
  providers: [ProductRelationsService],
  controllers: [ProductRelationsController]
})
export class ProductRelationsModule { }
