import { Test, TestingModule } from '@nestjs/testing';
import { CompositesController } from './composites.controller';

describe('Composites Controller', () => {
  let controller: CompositesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompositesController],
    }).compile();

    controller = module.get<CompositesController>(CompositesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
