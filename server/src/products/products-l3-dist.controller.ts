import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { ProductsController } from './products.controller';
import { ErrorDto } from 'src/errors/errors.dto';
import { ProductL3Dist } from './product-l3-dist.entity';
import { ProductL3DistDto } from './dto/product-l3-dist.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL3Src } from './product-l3-src.entity';
import { ProductL3DistHistory } from './product-l3-dist-history.entity';

@ApiTags('products/l3-dist')
@Controller('products/l3-dist')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class ProductsL3DistController extends ProductsController<ProductL3Dist, ProductL3DistHistory, ProductL3DistDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL3Dist, ProductL3DistHistory, productsService)
  }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<ProductL3Dist[]> {
    return this.productsService.findAll<ProductL3Dist,ProductL3DistHistory>(this.productType, this.productHistoryType, snapshotDateTime);
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL3Dist> {
    return this.productsService.findOne<ProductL3Dist>(this.productType, productId);
  }

  @Post()
  @ApiBody({ type: ProductL3DistDto })
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async create (@Body(new ClassValidationPipe()) product: ProductL3DistDto, @Query('productL3SrcId', new ParseIntPipe()) productL3SrcId: number) {
    const productLink = await this.productsService.findOne<ProductL3Src>(ProductL3Src, productL3SrcId);
    return this.productsService.create<ProductL3Dist, ProductL3DistDto>(this.productType, product, "sourceProduct", productLink);
  }

  @Put(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) updateProductDto: ProductL3DistDto) {
    return this.productsService.update<ProductL3Dist, ProductL3DistDto>(this.productType, productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  delete (@Param('productId', new ParseIntPipe()) productId: number): Promise<void> {
    return this.productsService.delete<ProductL3Dist>(this.productType, productId);
  }
}
