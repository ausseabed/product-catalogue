import { Module } from '@nestjs/common';
import { CompilationsService } from './compilations.service';
import { CompilationsController } from './compilations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compilation } from './compilation.entity';
import { CompilationHistory } from './compilation-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compilation, CompilationHistory])],
  providers: [CompilationsService],
  controllers: [CompilationsController]
})
export class CompilationsModule { }
