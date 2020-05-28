import { Controller, Get, Put, Delete, Body, Req, Param, Post, Res, UsePipes, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiBadRequestResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Survey } from './survey.entity'
import { SurveysService } from './surveys.service'
import { SurveyDto } from './dto/survey.dto';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { throwError } from 'rxjs';

@ApiTags('surveys')
@Controller('surveys')
@ApiBearerAuth('access-token')
export class SurveysController {
  constructor(private surveysService: SurveysService) { }

  @Get()
  async findAll (): Promise<Survey[]> {

    return this.surveysService.findAll();
  }

  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  @Get(':surveyId')
  async findOne (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<Survey> {
    let survey = this.surveysService.findOne(surveyId);
    console.log(survey);
    console.log(typeof survey);
    return survey;
  }

  @Post()
  create (@Body(new ClassValidationPipe()) survey: SurveyDto) {
    return this.surveysService.create(survey);
  }

  @Put(':surveyId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('surveyId', new ParseIntPipe()) surveyId: number, @Body(new ClassValidationPipe()) updateSurveyDto: SurveyDto) {
    return this.surveysService.update(surveyId, updateSurveyDto);
  }

  @Delete(':surveyId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  remove (@Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<void> {
    return this.surveysService.delete(surveyId);
  }
}
