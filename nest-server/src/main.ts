import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap () {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('AusSeabed product catalogue')
    .setDescription('The API description for the Ausseabed product catalogue inventory')
    .setContact("AusSeabed", "ausseabed.gov.au", "AusSeabed@ga.gov.au")
    .setVersion('1.0')
    .addTag('surveys')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
