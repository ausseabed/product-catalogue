import { Injectable, Logger } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

const config = require('./config');

@Injectable()
export class AzureADStrategy extends PassportStrategy(BearerStrategy, 'AzureADStrategy') {
  constructor() {
    super(config);
  }

  async validate (response: any) {
    const { preferred_username }: { preferred_username: string } = response;
    Logger.log(response)
    if (preferred_username) return preferred_username;
    else return "daemon";
  }
}
