import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(RequestLoggerMiddleware.name);
  use (req: any, res: any, next: () => void) {
    this.logger.log(`Request ${req.method}: ${req.path}`);
    next();
  }
}

export function requestLogger (req, res, next) {
  Logger.log(`Request ${req.method}: ${req.path}`);
  next();
};