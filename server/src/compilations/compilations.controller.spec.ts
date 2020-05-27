import { Test, TestingModule } from '@nestjs/testing';
import { CompilationsController } from './compilations.controller';

describe('Compilations Controller', () => {
  let controller: CompilationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompilationsController],
    }).compile();

    controller = module.get<CompilationsController>(CompilationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
