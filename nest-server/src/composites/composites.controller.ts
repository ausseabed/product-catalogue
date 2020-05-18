import { Controller, Get, Req, Param, ParseIntPipe, Body, Post, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBadRequestResponse } from '@nestjs/swagger';
import { CompositesService } from './composites.service';
import { Composite } from './composite.entity';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { CompositeDto } from './dto/composite.dto';
import { Request } from 'express';
@ApiTags('composites')
@Controller('composites')
export class CompositesController {
  constructor(private compositesService: CompositesService) { }

  @Get()
  async findAll (): Promise<Composite[]> {

    return this.compositesService.findAll();
  }

  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  @Get(':compositeId')
  async findOne (@Req() request: Request, @Param('compositeId', new ParseIntPipe()) compositeId: number): Promise<Composite> {
    let composite = this.compositesService.findOne(compositeId);
    console.log(composite);
    console.log(typeof composite);
    return composite;
  }

  @Post()
  create (@Body(new ClassValidationPipe()) composite: CompositeDto) {
    return this.compositesService.create(composite);
  }

  @Put(':compositeId')
  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  update (@Param('compositeId', new ParseIntPipe()) compositeId: number, @Body(new ClassValidationPipe()) updateCompositeDto: CompositeDto) {
    return this.compositesService.update(compositeId, updateCompositeDto);
  }

  @Delete(':compositeId')
  @ApiBadRequestResponse({ description: 'Could not find the composite' })
  remove (@Param('compositeId', new ParseIntPipe()) compositeId: number): Promise<void> {
    return this.compositesService.delete(compositeId);
  }
}
