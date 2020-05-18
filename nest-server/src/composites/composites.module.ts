import { Module } from '@nestjs/common';
import { CompositesService } from './composites.service';
import { CompositesController } from './composites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Composite } from './composite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Composite])],
  providers: [CompositesService],
  controllers: [CompositesController]
})
export class CompositesModule { }
