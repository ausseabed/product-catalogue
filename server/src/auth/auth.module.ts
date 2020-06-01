import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AzureADStrategy } from './azure-ad-strategy';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [AzureADStrategy]
})
export class AuthModule { }
