import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getMetadataArgsStorage } from 'typeorm';

// Need to import all the typeorm modules
// See https://github.com/nrwl/nx/issues/803
// See https://github.com/nestjs/nest/issues/755
// "migrations": ["dist/**/*.migration{.ts,.js}"],
// The modules are loaded from here, hence importing the entities
import { SurveysModule } from './surveys/surveys.module';
import { ProductsModule } from './products/products.module';
import { CompilationsModule } from './compilations/compilations.module';
import { ProductRelationsModule } from './product-relations/product-relations.module';

import * as ormconfig from './ormconfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), AuthModule, SurveysModule, ProductsModule, CompilationsModule, ProductRelationsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
