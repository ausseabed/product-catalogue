import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { ErrorDto } from 'src/errors/errors.dto';
import { ProductsController } from './products.controller';
import { ProductL3Src } from './product-l3-src.entity';
import { ProductL3SrcDto } from './dto/product-l3-src.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL3SrcHistoryView } from './product-l3-src-history-view.entity';

@ApiTags('products/l3-src')
@Controller('products/l3-src')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class ProductsL3SrcController extends ProductsController<ProductL3Src, ProductL3SrcHistoryView ,ProductL3SrcDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL3Src, ProductL3SrcHistoryView, productsService)
  }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<ProductL3Src[]> {
    const prod = this.productsService.findAll<ProductL3SrcHistoryView>(this.productHistoryType, snapshotDateTime)
    return prod as unknown as Promise<ProductL3Src[]>;
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL3Src> {
    return this.productsService.findOne<ProductL3Src>(this.productType, productId)
  }

  @Post('')
  @ApiBody({ type: ProductL3SrcDto })
  create (@Body(new ClassValidationPipe()) product: ProductL3SrcDto) {
    return this.productsService.create<ProductL3Src, ProductL3SrcDto>(this.productType, product);
  }
  @Put(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) updateProductDto: ProductL3SrcDto) {
    return this.productsService.update<ProductL3Src, ProductL3SrcDto>(this.productType, productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  delete (@Param('productId', new ParseIntPipe()) productId: number): Promise<void> {
    return this.productsService.delete<ProductL3Src>(this.productType, productId);
  }
}
