import { Controller, Get, Req, Param, ParseIntPipe, Body, Post, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBadRequestResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CompilationsService } from './compilations.service';
import { Compilation } from './compilation.entity';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { CompilationDto } from './dto/compilation.dto';
import { Request } from 'express';
@ApiTags('compilations')
@Controller('compilations')
@ApiBearerAuth('access-token')
export class CompilationsController {
  constructor(private compilationsService: CompilationsService) { }

  @Get()
  async findAll (): Promise<Compilation[]> {

    return this.compilationsService.findAll();
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