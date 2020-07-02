import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveysController } from './surveys.controller';
import { Survey, SurveyHistory } from './survey.entity';
import { SurveysService } from './surveys.service';
@Module({
  imports: [TypeOrmModule.forFeature([Survey, SurveyHistory])],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule { }
