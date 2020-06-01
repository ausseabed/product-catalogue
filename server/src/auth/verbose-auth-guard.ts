import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class VerboseAuthGuard extends AuthGuard('AzureADStrategy') {
  canActivate (context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest (err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err) {
      Logger.warn("Authentication of user failed.")
      throw err || new UnauthorizedException();
    } else if (!user) {
      Logger.warn("Authentication of user failed. " + info)
      throw new UnauthorizedException(info);
    }
    return user;
  }
}
