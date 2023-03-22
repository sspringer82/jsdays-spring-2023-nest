import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import morgan from './morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  app.use(morgan);
  const config = new DocumentBuilder()
    .setTitle('Library')
    .setDescription('The fancy API of the world leading library')
    .setVersion('0.0.1-beta.2')
    .addTag('library')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
