import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AppService} from './app.service';
import {APP_FILTER} from '@nestjs/core';
import {HttpErrorFilter} from './shared/http-error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    AddressesModule
  ],
  providers:[AppService,{
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  }]
})
export class AppModule {}