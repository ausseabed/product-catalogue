import { Module } from '@nestjs/common';
import { CompilationsService } from './compilations.service';
import { CompilationsController } from './compilations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compilation } from './compilation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compilation ])],
  providers: [CompilationsService],
  controllers: [CompilationsController]
})
export class CompilationsModule { }
