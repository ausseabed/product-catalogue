import { Test, TestingModule } from '@nestjs/testing';
import { CompositesService } from './composites.service';

describe('CompositesService', () => {
  let service: CompositesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompositesService],
    }).compile();

    service = module.get<CompositesService>(CompositesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
