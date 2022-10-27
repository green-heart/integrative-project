import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './entities/users.entitys';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  providers: [],
  controllers: [],
  exports: [],
})

export class UserModule {}