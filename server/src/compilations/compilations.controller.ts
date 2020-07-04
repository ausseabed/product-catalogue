import { Controller, Get, Req, Param, ParseIntPipe, Body, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { CompilationsService } from './compilations.service';
import { Compilation } from './compilation.entity';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { CompilationDto } from './dto/compilation.dto';
import { ErrorDto } from 'src/errors/errors.dto';
import { Request } from 'express';
@ApiTags('compilations')
@Controller('compilations')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class CompilationsController {
  constructor(private compilationsService: CompilationsService) { }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<Compilation[]> {

    return this.compilationsService.findAll(snapshotDateTime);
  }

  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  @Get(':compilationId')
  async findOne (@Req() request: Request, @Param('compilationId', new ParseIntPipe()) compilationId: number): Promise<Compilation> {
    let compilation = this.compilationsService.findOne(compilationId);
    console.log(compilation);
    console.log(typeof compilation);
    return compilation;
  }

  @Post()
  create (@Body(new ClassValidationPipe()) compilation: CompilationDto) {
    return this.compilationsService.create(compilation);
  }

  @Put(':compilationId')
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  update (@Param('compilationId', new ParseIntPipe()) compilationId: number, @Body(new ClassValidationPipe()) updateCompilationDto: CompilationDto) {
    return this.compilationsService.update(compilationId, updateCompilationDto);
  }

  @Delete(':compilationId')
  @ApiBadRequestResponse({ description: 'Could not find the compilation' })
  remove (@Param('compilationId', new ParseIntPipe()) compilationId: number): Promise<void> {
    return this.compilationsService.delete(compilationId);
  }
}
