import { Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Raw } from 'typeorm';
import { Compilation } from './compilation.entity';
import { CompilationDto } from './dto/compilation.dto';
import { CompilationHistoryView } from './compilation-history-view.entity';


@Injectable()
export class CompilationsService {
  constructor(
    @InjectRepository(CompilationHistoryView)
    private compilationHistoriesRepository: Repository<Compilation>,
    @InjectRepository(Compilation)
    private compilationRepository: Repository<Compilation>
  ) { }

  async findAll (snapshotDateTime: Date| unknown): Promise<Compilation[]> {
    if (snapshotDateTime)
    {
      const compilation = this.compilationHistoriesRepository.find( 
        {
          where: {
            sysPeriod: Raw(alias =>`${alias} @> '${snapshotDateTime}'::timestamptz`)
          }
        }
        );
      return compilation;
    }
    else
    {
      return this.compilationRepository.find();
    }
  }

  async findOne (id: number): Promise<Compilation> {
    return this.compilationRepository.findOneOrFail(id).catch(() => {
      throw new BadRequestException(`Could not find compilation for id ${id}.`)
    });
  }

  create (createSurveyDto: CompilationDto) {
    const compilation = new Compilation();
    compilation.name = createSurveyDto.name;
    compilation.uuid = createSurveyDto.uuid;
    compilation.year = createSurveyDto.year;
    return this.compilationRepository.save(compilation);
  }

  async update (id: number, updateSurveyDto: CompilationDto): Promise<void> {
    const compilation = await this.findOne(id);

    compilation.name = updateSurveyDto.name;
    compilation.uuid = updateSurveyDto.uuid;
    compilation.year = updateSurveyDto.year;
    await this.compilationRepository.save(compilation);
  }

  async delete (id: number): Promise<void> {
    await this.compilationRepository.delete(id);
  }
}
