require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;
import { AuthGuard, PassportStrategy } from '@nestjs/passport';

const config = require('./config');
// const BearerStrategy = require('passport-azure-ad').BearerStrategy;
import { BearerStrategy } from 'passport-azure-ad';
import { requestLogger } from './request-logger.middleware';

const ps = PassportStrategy(BearerStrategy, 'oauth-bearer')

const bearerStrategy = new BearerStrategy(config, (req, token, done) => {
  // Send user info using the second argument
  done(null, {}, token);
}
);

async function bootstrap () {
  const app = await NestFactory.create(AppModule,
    {
      logger: ['error', 'warn', 'debug', 'log'],
    }
  );

  app.useGlobalGuards(new (AuthGuard(bearerStrategy)));
  app.use(requestLogger)
  const options = new DocumentBuilder()
    .setTitle('AusSeabed product catalogue')
    .setDescription('The API description for the Ausseabed product catalogue inventory')
    .setContact("AusSeabed", "http://ausseabed.gov.au/", "AusSeabed@ga.gov.au")
    .setLicense("Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0.html")
    .setVersion('0.1.7')
    .addTag('surveys')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token')
    .addServer('/rest')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
