import { Controller, Get, Put, Delete, Body, Req, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBadRequestResponse, ApiBearerAuth, ApiRequestTimeoutResponse, ApiUnauthorizedResponse, ApiQuery } from '@nestjs/swagger';
import { ErrorDto } from 'src/errors/errors.dto';
import { ProductsController } from './products.controller';
import { ProductL2Src } from './product-l2-src.entity';
import { ProductL2SrcDto } from './dto/product-l2-src.dto';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { ClassValidationPipe } from 'src/validation/class-validation.pipe';
import { ProductL2SrcHistoryView } from './product-l2-src-history-view.entity';

@ApiTags('products/l2-src')
@Controller('products/l2-src')
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class ProductsL2SrcController extends ProductsController<ProductL2Src, ProductL2SrcHistoryView ,ProductL2SrcDto>{
  constructor(
    productsService: ProductsService,
  ) {
    super(ProductL2Src, ProductL2SrcHistoryView, productsService)
  }

  @Get()
  @ApiQuery({
    name: 'snapshotDateTime',
    required: false,
    type: Date
  })
  async findAll (@Query('snapshotDateTime') snapshotDateTime: Date| unknown): Promise<ProductL2Src[]> {
    if (snapshotDateTime)
    {
      const prod = this.productsService.findAll<ProductL2SrcHistoryView>(this.productHistoryType, snapshotDateTime)
      return prod as unknown as Promise<ProductL2Src[]>;
    }
    else
    {
      return this.productsService.findAll<ProductL2Src>(this.productType, snapshotDateTime)
    }
  }

  @Get(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  async findOne (@Req() request: Request, @Param('productId', new ParseIntPipe()) productId: number): Promise<ProductL2Src> {
    return this.productsService.findOne<ProductL2Src>(this.productType, productId)
  }

  @Post('')
  @ApiBody({ type: ProductL2SrcDto })
  create (@Body(new ClassValidationPipe()) product: ProductL2SrcDto) {
    return this.productsService.create<ProductL2Src, ProductL2SrcDto>(this.productType, product);
  }
  @Put(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  update (@Param('productId', new ParseIntPipe()) productId: number, @Body(new ClassValidationPipe()) updateProductDto: ProductL2SrcDto) {
    return this.productsService.update<ProductL2Src, ProductL2SrcDto>(this.productType, productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiBadRequestResponse({ description: 'Could not find the survey' })
  delete (@Param('productId', new ParseIntPipe()) productId: number): Promise<void> {
    return this.productsService.delete<ProductL2Src>(this.productType, productId);
  }
}
