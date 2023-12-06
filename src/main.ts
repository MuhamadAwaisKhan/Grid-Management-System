import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
const customLogger = (tokens, req, res) => {
  const startTime = process.hrtime();
  const requestTime = morgan['response-time'](tokens, req, res);
  const totalTime = process.hrtime(startTime)[0] * 1000 + process.hrtime(startTime)[1] / 1e6;

  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    'response time:', requestTime,
    'total time:', totalTime.toFixed(2), 'ms',
  ].join(' ');
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan(customLogger));
  const config = new DocumentBuilder()
    .setTitle('api')
    .setDescription('Api Execution')
    .setVersion('1.0')
    .addTag('execution')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();