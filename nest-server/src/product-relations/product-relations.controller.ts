import { Controller, Param, Req, Get, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductRelationsService } from './product-relations.service';
import { ApiTags, ApiBadRequestResponse } from '@nestjs/swagger';
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
export class ProductRelationsController {
  constructor(private productRelationsService: ProductRelationsService) { }

  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  @Get('composite/l3/:compositeId')
  async findOneComposite (@Req() request: Request, @Param('compositeId', new ParseIntPipe()) compositeId: number): Promise<CompositeL3Relation> {
    return this.productRelationsService.findOne<CompositeL3Relation>(CompositeL3Relation, compositeId);
  }

  @Post('composite/l3')
  createComposite (@Body(new ClassValidationPipe()) composite: CompositeL3RelationDto) {
    return this.productRelationsService.create<CompositeL3Relation, CompositeL3RelationDto>(CompositeL3Relation, composite);
  }

  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  @Get('survey/l3/:surveyId')
  async findOneL3Survey (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<SurveyL3Relation> {
    return this.productRelationsService.findOne<SurveyL3Relation>(SurveyL3Relation, surveyId);
  }

  @Post('survey/l3')
  createL3Survey (@Body(new ClassValidationPipe()) survey: SurveyL3RelationDto) {
    return this.productRelationsService.create<SurveyL3Relation, SurveyL3RelationDto>(SurveyL3Relation, survey);
  }

  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  @Get('survey/l0/:surveyId')
  async findOneL0Survey (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<SurveyL0Relation> {
    return this.productRelationsService.findOne<SurveyL0Relation>(SurveyL0Relation, surveyId);
  }

  @Post('survey/l0')
  createL0Survey (@Body(new ClassValidationPipe()) survey: SurveyL0RelationDto) {
    return this.productRelationsService.create<SurveyL0Relation, SurveyL0RelationDto>(SurveyL0Relation, survey);
  }
  // @Put(':compositeId')
  // @ApiBadRequestResponse({ description: 'Could not find the composite' })
  // update (@Param('compositeId', new ParseIntPipe()) compositeId: number, @Body(new ClassValidationPipe()) updateCompositeDto: CompositeDto) {
  //   return this.productRelationsService.update(compositeId, updateCompositeDto);
  // }

  // @Delete(':compositeId')
  // @ApiBadRequestResponse({ description: 'Could not find the composite' })
  // remove (@Param('compositeId', new ParseIntPipe()) compositeId: number): Promise<void> {
  //   return this.productRelationsService.delete(compositeId);
  // }
}
