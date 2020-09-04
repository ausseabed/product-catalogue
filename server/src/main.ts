require('dotenv').config()
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;
import { requestLogger } from './errors/request-logger.middleware';
import { TimeoutInterceptor } from './errors/timeout.interceptor';
import { VerboseAuthGuard } from './auth/verbose-auth-guard';
import { LoggingInterceptor } from './errors/logging.interceptor';
import { AllExceptionsFilter } from './errors/all-exceptions.filter';
import { PassportModule } from '@nestjs/passport';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap () {
  const app = await NestFactory.create(AppModule,
    {
      logger: ['error', 'warn', 'debug', 'log', 'verbose'],
    }
  );
  PassportModule.register({
    defaultStrategy: 'AzureADStrategy',
    session: false,
  });
  app.useGlobalGuards(new (VerboseAuthGuard));
  app.use(requestLogger)
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter()); // Uncomment to catch any exception
  const options = new DocumentBuilder()
    .setTitle('AusSeabed product catalogue')
    .setDescription('The API description for the Ausseabed product catalogue inventory')
    .setContact("AusSeabed", "http://ausseabed.gov.au/", "AusSeabed@ga.gov.au")
    .setLicense("Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0.html")
    .setVersion('0.1.14')
    .addTag('surveys')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token')
    .addServer('/rest')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });

  const swaggerCustomOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      onComplete: function() {
        const key = sessionStorage.getItem('rest-session-key');
        if (key)
        {
          sessionStorage.removeItem('rest-session-key');
          window.eval('ui').preauthorizeApiKey("access-token", key);
        }
      }
    }
  }
  SwaggerModule.setup('api', app, document, swaggerCustomOptions);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
