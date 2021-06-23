import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiRequestTimeoutResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorDto } from 'src/errors/errors.dto';
import { StylesService } from './styles.service';
import { Style } from './style.entity';

@ApiTags('styles')
@Controller('styles')
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth('access-token')
@ApiRequestTimeoutResponse({ description: 'Server took too long to respond.', type: ErrorDto })
@ApiUnauthorizedResponse({ description: 'Unable to authenticate request.', type: ErrorDto })
export class StylesController {
    constructor(private stylesService: StylesService) { }

    @Get()
    async findAll (): Promise<Style[]> {
        return this.stylesService.findAll();
    }
}
