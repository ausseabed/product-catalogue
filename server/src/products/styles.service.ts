import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Style } from './style.entity';

@Injectable()
export class StylesService {
    constructor(@InjectRepository(Style) private stylesRepository: Repository<Style>) {
    }

    async findAll(): Promise<Style[]> {
        return this.stylesRepository.find();
    }

    async findOne(id: string): Promise<Style> {
        return this.stylesRepository.findOneOrFail(id).catch(() => {
            throw new BadRequestException(`Could not find style for id ${id}.`)
        });
    }
}
