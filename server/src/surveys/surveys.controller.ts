import { Controller, Get, Put, Delete, Body, Req, Param, Post, Res, UsePipes, ParseIntPipe, BadRequestException, Logger, Query, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { Survey } from './survey.entity'
import { SurveysService } from './surveys.service'
import { SurveyDto } from './dto/survey.dto';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { throwError } from 'rxjs';
import { ErrorDto } from 'src/errors/errors.dto';

@ApiTags('surveys')
@Controller('surveys')
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class SurveysController {
  constructor(private surveysService: SurveysService) { }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<Survey[]> {
    return this.surveysService.findAll(snapshotDateTime);
  }

  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  @Get(':surveyId')
  async findOne (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<Survey> {
    let survey = this.surveysService.findOne(surveyId);
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
