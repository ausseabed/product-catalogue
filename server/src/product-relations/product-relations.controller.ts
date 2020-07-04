import { Controller, Param, Req, Get, ParseIntPipe, Post, Body, Put, Delete, Logger, Query } from '@nestjs/common';
import { ProductRelationsService } from './product-relations.service';
import { ApiTags, ApiBadRequestResponse, ApiBearerAuth, ApiResponseProperty, ApiResponse, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { CompilationL3Relation } from './compilation-l3-relation.entity';
import { SurveyL3Relation } from './survey-l3-relation.entity';
import { CompilationL3RelationDto } from './dto/compilation-l3-relation.dto';
import { SurveyL3RelationDto } from './dto/survey-l3-relation.dto';
import { Request } from 'express';
import { SurveyL0Relation } from './survey-l0-relation.entity';
import { SurveyL0RelationDto } from './dto/survey-l0-relation.dto';
import { ProductL3Src } from 'src/products/product-l3-src.entity';
import { Survey } from 'src/surveys/survey.entity';
import { ProductL0Src } from 'src/products/product-l0-src.entity';
import { Compilation } from 'src/compilations/compilation.entity';
import { RelationSummaryDto } from './dto/relation-summary.dto';
import { ErrorDto } from 'src/errors/errors.dto';
import { CompilationL3RelationHistoryView } from './compilation-l3-relation-history-view.entity';
import { CompilationHistoryView } from 'src/compilations/compilation-history-view.entity';
import { ProductL3SrcHistoryView } from 'src/products/product-l3-src-history-view.entity';
import { SurveyL3RelationHistoryView } from './survey-l3-relation-history-view.entity';
import { SurveyHistoryView } from 'src/surveys/survey-history-view.entity';
import { SurveyL0RelationHistoryView } from './survey-l0-relation-history-view.entity';
import { ProductL0SrcHistoryView } from 'src/products/product-l0-src-history-view.entity';
@ApiTags('product-relations')
@Controller('product-relations')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class ProductRelationsController {
  constructor(private productRelationsService: ProductRelationsService) { }

  /* COMPILATION -> L3 */
  @Get('compilation-to-l3')
  @ApiResponse({ status: 200, type: [RelationSummaryDto] })
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAllL3Compilation (@Req() request: Request, @Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<RelationSummaryDto[]> {
    if (snapshotDateTime)
    {
      return this.productRelationsService.findAllProduct<CompilationL3RelationHistoryView, CompilationHistoryView, ProductL3SrcHistoryView>(
        CompilationL3RelationHistoryView, CompilationHistoryView, ProductL3Src, "productL3SrcId", snapshotDateTime);
    }
    else
    {
      return this.productRelationsService.findAllProduct<CompilationL3Relation, Compilation, ProductL3Src>(
        CompilationL3Relation, Compilation, ProductL3Src, "productL3SrcId", snapshotDateTime);
    }
  }

  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  @Get('compilation-to-l3/compilation/:compilationId')
  async findConditionalCompilation (@Req() request: Request, @Param('compilationId', new ParseIntPipe()) compilationId: number): Promise<CompilationL3Relation> {

    return this.productRelationsService.findConditional<CompilationL3Relation>(CompilationL3Relation, { compilation: { id: compilationId } });
  }

  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  @Get('compilation-to-l3/:relationId')
  async findOneCompilation (@Req() request: Request, @Param('relationId', new ParseIntPipe()) relationId: number): Promise<CompilationL3Relation> {
    return this.productRelationsService.findOne<CompilationL3Relation>(CompilationL3Relation, relationId);
  }

  @Post('compilation-to-l3')
  createCompilation (@Body(new ClassValidationPipe()) compilation: CompilationL3RelationDto) {
    return this.productRelationsService.create<CompilationL3Relation, CompilationL3RelationDto>(CompilationL3Relation, compilation);
  }

  @Put('compilation-to-l3/:relationId')
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  updateCompilation (@Param('relationId', new ParseIntPipe()) relationId: number, @Body(new ClassValidationPipe()) updateCompilationDto: CompilationL3RelationDto) {
    return this.productRelationsService.update<CompilationL3Relation, CompilationL3RelationDto>(CompilationL3Relation, relationId, updateCompilationDto);
  }

  @Delete('compilation-to-l3/:relationId')
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  deleteCompilation (@Param('relationId', new ParseIntPipe()) relationId: number): Promise<void> {
    return this.productRelationsService.delete<CompilationL3Relation>(CompilationL3Relation, relationId);
  }

  /* SURVEY -> L3 */
  @Get('surveys-to-l3')
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  @ApiResponse({ status: 200, type: [RelationSummaryDto] })
  async findAllL3Survey (@Req() request: Request, @Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<RelationSummaryDto[]> {
    if (snapshotDateTime) {
      return this.productRelationsService.findAllProduct<SurveyL3RelationHistoryView, SurveyHistoryView, ProductL3SrcHistoryView>(
        SurveyL3RelationHistoryView, SurveyHistoryView, ProductL3SrcHistoryView, "productL3SrcId", snapshotDateTime);
    }
    else
    {
      return this.productRelationsService.findAllProduct<SurveyL3Relation, Survey, ProductL3Src>(
        SurveyL3Relation, Survey, ProductL3Src, "productL3SrcId", snapshotDateTime);
    }
  }

  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  @Get('surveys-to-l3/survey/:surveyId')
  async findConditionalL3Survey (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<SurveyL3Relation> {
    return this.productRelationsService.findConditional<SurveyL3Relation>(SurveyL3Relation, { survey: { id: surveyId } });
  }

  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  @Get('surveys-to-l3/:relationId')
  async findOneL3Survey (@Req() request: Request, @Param('relationId', new ParseIntPipe()) relationId: number): Promise<SurveyL3Relation> {
    return this.productRelationsService.findOne<SurveyL3Relation>(SurveyL3Relation, relationId);
  }

  @Post('surveys-to-l3')
  createL3Survey (@Body(new ClassValidationPipe()) survey: SurveyL3RelationDto) {
    return this.productRelationsService.create<SurveyL3Relation, SurveyL3RelationDto>(SurveyL3Relation, survey);
  }

  @Put('surveys-to-l3/:relationId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  updateL3Survey (@Param('relationId', new ParseIntPipe()) relationId: number, @Body(new ClassValidationPipe()) updateCompilationDto: SurveyL3RelationDto) {
    return this.productRelationsService.update<SurveyL3Relation, SurveyL3RelationDto>(SurveyL3Relation, relationId, updateCompilationDto);
  }

  @Delete('surveys-to-l3/:relationId')
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  deleteL3Survey (@Param('relationId', new ParseIntPipe()) relationId: number): Promise<void> {
    return this.productRelationsService.delete<SurveyL3Relation>(SurveyL3Relation, relationId);
  }

  /* SURVEY -> L0 */
  @Get('surveys-to-l0')
  @ApiResponse({ status: 200, type: [RelationSummaryDto] })
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAllL0Survey (@Req() request: Request, @Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<RelationSummaryDto[]> {
    if (snapshotDateTime) {
      return this.productRelationsService.findAllProduct<SurveyL0RelationHistoryView, SurveyHistoryView, ProductL0SrcHistoryView>(
        SurveyL0RelationHistoryView, SurveyHistoryView, ProductL0SrcHistoryView, "productL0SrcId", snapshotDateTime);
    }
    else
    {
      return this.productRelationsService.findAllProduct<SurveyL0Relation, Survey, ProductL0Src>(
        SurveyL0Relation, Survey, ProductL0Src, "productL0SrcId", snapshotDateTime);
    }
  }

  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  @Get('surveys-to-l0/survey/:surveyId')
  async findConditionalL0Survey (@Req() request: Request, @Param('surveyId', new ParseIntPipe()) surveyId: number): Promise<SurveyL0Relation> {

    return this.productRelationsService.findConditional<SurveyL0Relation>(SurveyL0Relation, { survey: { id: surveyId } });
  }
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  @Get('surveys-to-l0/:relationId')
  async findOneL0Survey (@Req() request: Request, @Param('relationId', new ParseIntPipe()) relationId: number): Promise<SurveyL0Relation> {
    return this.productRelationsService.findOne<SurveyL0Relation>(SurveyL0Relation, relationId);
  }

  @Post('surveys-to-l0')
  createL0Survey (@Body(new ClassValidationPipe()) survey: SurveyL0RelationDto) {
    return this.productRelationsService.create<SurveyL0Relation, SurveyL0RelationDto>(SurveyL0Relation, survey);
  }

  @Put('surveys-to-l0/:relationId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  updateL0Survey (@Param('relationId', new ParseIntPipe()) relationId: number, @Body(new ClassValidationPipe()) updateCompilationDto: SurveyL0RelationDto) {
    return this.productRelationsService.update<SurveyL0Relation, SurveyL0RelationDto>(SurveyL0Relation, relationId, updateCompilationDto);
  }

  @Delete('surveys-to-l0/:relationId')
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  deleteL0Survey (@Param('relationId', new ParseIntPipe()) relationId: number): Promise<void> {
    return this.productRelationsService.delete<SurveyL0Relation>(SurveyL0Relation, relationId);
  }
}
