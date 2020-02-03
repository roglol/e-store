import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    AddressesModule
  ],
})
export class AppModule {}