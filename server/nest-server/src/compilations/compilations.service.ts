import { Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compilation } from './compilation.entity';
import { CompilationDto } from './dto/compilation.dto';


@Injectable()
export class CompilationsService {
  constructor(
    @InjectRepository(Compilation)
    private compilationRepository: Repository<Compilation>
  ) { }

  async findAll (): Promise<Compilation[]> {
    return this.compilationRepository.find();
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
