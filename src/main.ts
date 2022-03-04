import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './shares/filters/http-exception.filter';

dotenv.config();

async function bootstrap() {
  const port = process.env.APP_PORT;
  const appName = process.env.APP_NAME;
  const prefix = process.env.APP_PREFIX;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(appName)
    .setDescription(appName)
    .setVersion(prefix)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${prefix}/docs`, app, document, {
    customSiteTitle: appName,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      displayRequestDuration: true,
    },
  });

  await app.listen(port);
}
bootstrap();
