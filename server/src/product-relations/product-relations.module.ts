import { Module } from '@nestjs/common';
import { ProductRelationsService } from './product-relations.service';
import { ProductRelationsController } from './product-relations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompilationL3Relation } from './compilation-l3-relation.entity';
import { SurveyL3Relation } from './survey-l3-relation.entity';
import { SurveyL0Relation } from './survey-l0-relation.entity';
import { CompilationL3RelationHistoryView } from './compilation-l3-relation-history-view.entity';
import { SurveyL3RelationHistoryView } from './survey-l3-relation-history-view.entity';
import { SurveyL0RelationHistoryView } from './survey-l0-relation-history-view.entity';
import { SurveyL2Relation } from './survey-l2-relation.entity';
import { SurveyL2RelationHistoryView } from './survey-l2-relation-history-view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompilationL3Relation, SurveyL3Relation, SurveyL2Relation, SurveyL0Relation, 
    CompilationL3RelationHistoryView, SurveyL3RelationHistoryView, SurveyL2RelationHistoryView, SurveyL0RelationHistoryView ])],
  providers: [ProductRelationsService],
  controllers: [ProductRelationsController]
})
export class ProductRelationsModule { }
