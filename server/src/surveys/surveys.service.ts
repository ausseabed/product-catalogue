import { Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindConditions, Raw } from 'typeorm';
import { Survey } from './survey.entity';
import { SurveyDto } from './dto/survey.dto';
import { SurveyHistoryView } from './survey-history-view.entity';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<Survey>,
    @InjectRepository(SurveyHistoryView)
    private surveyHistoriesRepository: Repository<SurveyHistoryView>

  ) { }

  async findAll (snapshotDateTime: Date| unknown): Promise<Survey[]> {
    if (snapshotDateTime)
    {
      const surveys = this.surveyHistoriesRepository.find( 
        {
          where: {
            sysPeriod: Raw(alias =>`${alias} @> '${snapshotDateTime}'::timestamptz`)
          }
        }
        );
      return surveys;
    }
    else
    {
      return this.surveysRepository.find();
    }
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
