import { Test, TestingModule } from '@nestjs/testing';
import { ProductRelationsController } from './product-relations.controller';

describe('ProductRelations Controller', () => {
  let controller: ProductRelationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRelationsController],
    }).compile();

    controller = module.get<ProductRelationsController>(ProductRelationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
