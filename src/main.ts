import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import { HttpExceptionFilter } from './common/filters/exception.filter';
import { ExceptionInterceptor } from './common/interceptors/exception.interceptor';
import { TransformInterceptor } from './common/interceptors/return.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ExceptionInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(config.PORT);
  console.log(`app listening at: ${config.PORT}`);
}
bootstrap();
