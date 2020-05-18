import { Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { SurveyDto } from './dto/survey.dto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<Survey>
  ) { }

  async findAll (): Promise<Survey[]> {
    return this.surveysRepository.find();
  }

  async findOne (id: number): Promise<Survey> {
    return this.surveysRepository.findOneOrFail(id).catch(() => {
      throw new BadRequestException(`Could not find survey for id ${id}.`)
    });
  }

  create (createSurveyDto: SurveyDto) {
    const survey = new Survey();
    survey.name = createSurveyDto.name;
    survey.uuid = createSurveyDto.uuid;
    survey.year = createSurveyDto.year;
    return this.surveysRepository.save(survey);
  }

  async update (id: number, updateSurveyDto: SurveyDto): Promise<void> {
    const survey = await this.findOne(id);

    survey.name = updateSurveyDto.name;
    survey.uuid = updateSurveyDto.uuid;
    survey.year = updateSurveyDto.year;
    await this.surveysRepository.save(survey);
  }

  async delete (id: number): Promise<void> {
    await this.surveysRepository.delete(id);
  }
}
