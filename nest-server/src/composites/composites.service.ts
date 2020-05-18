import { Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Composite } from './composite.entity';
import { CompositeDto } from './dto/composite.dto';


@Injectable()
export class CompositesService {
  constructor(
    @InjectRepository(Composite)
    private compositeRepository: Repository<Composite>
  ) { }

  async findAll (): Promise<Composite[]> {
    return this.compositeRepository.find();
  }

  async findOne (id: number): Promise<Composite> {
    return this.compositeRepository.findOneOrFail(id).catch(() => {
      throw new BadRequestException(`Could not find composite for id ${id}.`)
    });
  }

  create (createSurveyDto: CompositeDto) {
    const composite = new Composite();
    composite.name = createSurveyDto.name;
    composite.uuid = createSurveyDto.uuid;
    composite.year = createSurveyDto.year;
    return this.compositeRepository.save(composite);
  }

  async update (id: number, updateSurveyDto: CompositeDto): Promise<void> {
    const composite = await this.findOne(id);

    composite.name = updateSurveyDto.name;
    composite.uuid = updateSurveyDto.uuid;
    composite.year = updateSurveyDto.year;
    await this.compositeRepository.save(composite);
  }

  async delete (id: number): Promise<void> {
    await this.compositeRepository.delete(id);
  }
}
