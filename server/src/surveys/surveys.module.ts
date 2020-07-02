import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveysController } from './surveys.controller';
import { Survey } from './survey.entity';
import { SurveysService } from './surveys.service';
import { SurveyHistory } from './survey-history.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Survey, SurveyHistory])],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule { }
