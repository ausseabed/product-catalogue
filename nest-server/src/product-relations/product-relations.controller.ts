import { Controller, Param, Req, Get, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductRelationsService } from './product-relations.service';
import { ApiTags, ApiBadRequestResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { CompositeL3Relation } from './composite-l3-relation.entity';
import { SurveyL3Relation } from './survey-l3-relation.entity';
import { CompositeL3RelationDto } from './dto/composite-l3-relation.dto';
import { SurveyL3RelationDto } from './dto/survey-l3-relation.dto';
import { Request } from 'express';
import { SurveyL0Relation } from './survey-l0-relation.entity';
import { SurveyL0RelationDto } from './dto/survey-l0-relation.dto';
@ApiTags('product-relations')
@Controller('product-relations')
@ApiBearerAuth('access-token')
export class ProductRelationsController {
  constructor(private productRelationsService: ProductRelationsService) { }

  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  @Get('composites/:compositeId/l3')
  async findOneComposite (@Req() request: Request, @Param('compositeId', new ParseIntPipe()) compositeId: number): Promise<CompositeL3Relation> {
    return this.productRelationsService.findOne<CompositeL3Relation>(CompositeL3Relation, compositeId);
  }

  @Post('composites/:compositeId/l3')
  createComposite (@Body(new ClassValidationPipe()) composite: CompositeL3RelationDto) {
    return this.productRelationsService.create<CompositeL3Relation, CompositeL3RelationDto>(CompositeL3Relation, composite);
  }

  @Put('composites/:compositeId/l3')
  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  updateComposite (@Param('compositeId', new ParseIntPipe()) compositeId: number, @Body(new ClassValidationPipe()) updateCompositeDto: CompositeL3RelationDto) {
    return this.productRelationsService.update<CompositeL3Relation, CompositeL3RelationDto>(CompositeL3Relation, compositeId, updateCompositeDto);
  }

  @Delete('composites/:compositeId/l3')
  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  deleteComposite (@Param('compositeId', new ParseIntPipe()) compositeId: number): Promise<void> {
    return this.productRelationsService.delete<CompositeL3Relation>(CompositeL3Relation, compositeId);
  }

  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  @Get('surveys/:surveyId/l3')
  async findOneL3Survey (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<SurveyL3Relation> {
    return this.productRelationsService.findOne<SurveyL3Relation>(SurveyL3Relation, surveyId);
  }

  @Post('surveys/:surveyId/l3')
  createL3Survey (@Body(new ClassValidationPipe()) survey: SurveyL3RelationDto) {
    return this.productRelationsService.create<SurveyL3Relation, SurveyL3RelationDto>(SurveyL3Relation, survey);
  }

  @Put('surveys/:surveyId/l3')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  updateL3Survey (@Param('surveyId', new ParseIntPipe()) surveyId: number, @Body(new ClassValidationPipe()) updateCompositeDto: SurveyL3RelationDto) {
    return this.productRelationsService.update<SurveyL3Relation, SurveyL3RelationDto>(SurveyL3Relation, surveyId, updateCompositeDto);
  }

  @Delete('surveys/:surveyId/l3')
  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  deleteL3Survey (@Param('surveyId', new ParseIntPipe()) compositeId: number): Promise<void> {
    return this.productRelationsService.delete<SurveyL3Relation>(SurveyL3Relation, compositeId);
  }

  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  @Get('surveys/:surveyId/l0')
  async findOneL0Survey (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<SurveyL0Relation> {
    return this.productRelationsService.findOne<SurveyL0Relation>(SurveyL0Relation, surveyId);
  }

  @Post('surveys/:surveyId/l0')
  createL0Survey (@Body(new ClassValidationPipe()) survey: SurveyL0RelationDto) {
    return this.productRelationsService.create<SurveyL0Relation, SurveyL0RelationDto>(SurveyL0Relation, survey);
  }

  @Put('surveys/:surveyId/l0')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  updateL0Survey (@Param('surveyId', new ParseIntPipe()) surveyId: number, @Body(new ClassValidationPipe()) updateCompositeDto: SurveyL0RelationDto) {
    return this.productRelationsService.update<SurveyL0Relation, SurveyL0RelationDto>(SurveyL0Relation, surveyId, updateCompositeDto);
  }

  @Delete('surveys/:surveyId/l0')
  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  deleteL0Survey (@Param('surveyId', new ParseIntPipe()) compositeId: number): Promise<void> {
    return this.productRelationsService.delete<SurveyL0Relation>(SurveyL0Relation, compositeId);
  }

}
