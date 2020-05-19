import { Test, TestingModule } from '@nestjs/testing';
import { CompilationsService } from './compilations.service';

describe('CompilationsService', () => {
  let service: CompilationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompilationsService],
    }).compile();

    service = module.get<CompilationsService>(CompilationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
