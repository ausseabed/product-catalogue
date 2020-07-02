import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { ErrorDto } from 'src/errors/errors.dto';
import { ProductsController } from './products.controller';
import { ProductL0Dist } from './product-l0-dist.entity';
import { ProductL0DistDto } from './dto/product-l0-dist.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL0InstrumentFile } from './product-l0-instrument-file.entity';
import { ProductL0InstrumentFileDto } from './dto/product-l0-instrument-file.dto';
import { ProductL0Src } from './product-l0-src.entity';
import { ProductL0DistHistory } from './product-l0-dist-history.entity';
import { ProductL0InstrumentFileHistory } from './product-l0-instrument-file-history.entity';

@ApiTags('products/l0-dist')
@Controller('products/l0-dist')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class ProductsL0DistController extends ProductsController<ProductL0Dist, ProductL0DistHistory, ProductL0DistDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL0Dist, ProductL0DistHistory, productsService)
  }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown):  Promise<ProductL0Dist[]> {
    return this.productsService.findAll<ProductL0Dist, ProductL0DistHistory>(this.productType, this.productHistoryType, snapshotDateTime);
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL0Dist> {
    return this.productsService.findOne<ProductL0Dist>(this.productType, productId)
  }

  @Post()
  @ApiBody({ type: ProductL0DistDto })
  async create (@Body(new ClassValidationPipe()) product: ProductL0DistDto, @Query('productL0SrcId', new ParseIntPipe()) productL0SrcId: number) {
    const productLink = await this.productsService.findOne<ProductL0Src>(ProductL0Src, productL0SrcId)
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
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findOneInstrument (@Param('productId', new ParseIntPipe(), ) productId: number,
    @Param('instrumentId', new ParseIntPipe()) instrumentId: number, @Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<ProductL0InstrumentFile[]> {
    return this.productsService.findAll<ProductL0InstrumentFile, ProductL0InstrumentFileHistory>(ProductL0InstrumentFile, ProductL0InstrumentFileHistory, snapshotDateTime);
  }

  @Get(':productId/instrument-files')
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findInstruments (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number,@Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<ProductL0InstrumentFile[]> {
    return this.productsService.findAll<ProductL0InstrumentFile, ProductL0InstrumentFileHistory>(ProductL0InstrumentFile, ProductL0InstrumentFileHistory, snapshotDateTime);
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
