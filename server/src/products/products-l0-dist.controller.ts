import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ProductsController } from './products.controller';
import { ProductL0Dist } from './product-l0-dist.entity';
import { ProductL0DistDto } from './dto/product-l0-dist.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL0InstrumentFile } from './product-l0-instrument-file.entity';
import { ProductL0InstrumentFileDto } from './dto/product-l0-instrument-file.dto';
import { ProductL0Src } from './product-l0-src.entity';

@ApiTags('products/l0-dist')
@Controller('products/l0-dist')
@ApiBearerAuth('access-token')
export class ProductsL0DistController extends ProductsController<ProductL0Dist, ProductL0DistDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL0Dist, productsService)
  }

  @Get()
  async findAll (): Promise<ProductL0Dist[]> {
    return this.productsService.findAll<ProductL0Dist>(this.productType);
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL0Dist> {
    return this.productsService.findOne<ProductL0Dist>(this.productType, productId)
  }

  @Post('')
  @ApiBody({ type: ProductL0DistDto })
  create (@Body(new ClassValidationPipe()) product: ProductL0DistDto, @Param('productL0SrcId', new ParseIntPipe()) productL0SrcId: number) {
    const productLink = this.productsService.findOne<ProductL0Src>(ProductL0Src, productL0SrcId)
    return this.productsService.create<ProductL0Dist, ProductL0DistDto>(this.productType, product, "sourceProduct", productLink);
  }
  @Put(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) updateProductDto: ProductL0DistDto) {
    return this.productsService.update<ProductL0Dist, ProductL0DistDto>(this.productType, productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  delete (@Param('productId', new ParseIntPipe()) productId: number): Promise<void> {
    return this.productsService.delete<ProductL0Dist>(this.productType, productId);
  }

  @Get(':productId/instrument-files/:instrumentId')
  async findOneInstrument (@Param('productId', new ParseIntPipe()) productId: number,
    @Param('instrumentId', new ParseIntPipe()) instrumentId: number): Promise<ProductL0InstrumentFile[]> {
    return this.productsService.findAll<ProductL0InstrumentFile>(ProductL0InstrumentFile);
  }

  @Get(':productId/instrument-files')
  async findInstruments (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL0InstrumentFile[]> {
    return this.productsService.findAll<ProductL0InstrumentFile>(ProductL0InstrumentFile);
  }

  @Post(':productId/instrument-files')
  @ApiBody({ type: ProductL0InstrumentFileDto })
  createInstrument (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) instrument: ProductL0InstrumentFileDto) {
    return this.productsService.create<ProductL0InstrumentFile, ProductL0InstrumentFileDto>(ProductL0InstrumentFile, instrument);
  }
  @Put(':productId/instrument-files/:instrumentId')
  @ApiBadRequestResponse({ description: 'Could not find the instrument' })
  updateInstrument (@Param('productId', new ParseIntPipe()) productId: number,
    @Param('instrumentId', new ParseIntPipe()) instrumentId: number,
    @Body(new ClassValidationPipe()) updateProductDto: ProductL0InstrumentFileDto) {
    return this.productsService.update<ProductL0InstrumentFile, ProductL0InstrumentFileDto>(ProductL0InstrumentFile, instrumentId, updateProductDto);
  }

  @Delete(':productId/instrument-files/:instrumentId')
  @ApiBadRequestResponse({ description: 'Could not find the instrument' })
  deleteInstrument (
    @Param('productId', new ParseIntPipe()) productId: number,
    @Param('instrumentId', new ParseIntPipe()) instrumentId: number): Promise<void> {
    return this.productsService.delete<ProductL0InstrumentFile>(ProductL0InstrumentFile, instrumentId);
  }
}
