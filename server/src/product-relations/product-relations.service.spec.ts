import { Test, TestingModule } from '@nestjs/testing';
import { ProductRelationsService } from './product-relations.service';

describe('ProductRelationsService', () => {
  let service: ProductRelationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRelationsService],
    }).compile();

    service = module.get<ProductRelationsService>(ProductRelationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
