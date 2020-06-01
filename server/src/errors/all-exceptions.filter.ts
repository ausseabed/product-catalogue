import { ArgumentsHost, Catch, ExceptionFilter, Logger, Next } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch (exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    Logger.error(`Exception thrown: ${request.method}: ${request.path}`);
    Logger.error(exception);
  }
}
