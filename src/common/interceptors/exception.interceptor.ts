import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  ServiceUnavailableException,
  CallHandler,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const logger = new Logger('ExceptionInterceptor');

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) =>
        throwError(() => {
          if (err.constructor === HttpException) return err;
          logger.error(err.message);
          return new ServiceUnavailableException();
        }),
      ),
    );
  }
}
