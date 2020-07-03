import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveysController } from './surveys.controller';
import { Survey } from './survey.entity';
import { SurveysService } from './surveys.service';
import { SurveyHistoryView } from './survey-history-view.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Survey, SurveyHistoryView])],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule { }
