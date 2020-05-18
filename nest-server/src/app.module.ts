import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getMetadataArgsStorage } from 'typeorm';

// Need to import all the typeorm modules
// See https://github.com/nrwl/nx/issues/803
// See https://github.com/nestjs/nest/issues/755
// "migrations": ["dist/**/*.migration{.ts,.js}"],
// The modules are loaded from here, hence importing the entities
import { Survey } from './surveys/survey.entity';
import { SurveysModule } from './surveys/surveys.module';
import { ProductsModule } from './products/products.module';
import { CompositesModule } from './composites/composites.module';
import { ProductRelationsModule } from './product-relations/product-relations.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: process.env.POSTGRES_HOSTNAME,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [],
      autoLoadEntities: true,
      "synchronize": true,
      "keepConnectionAlive": true,
      "logging": "all"
    }), SurveysModule, ProductsModule, CompositesModule, ProductRelationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
