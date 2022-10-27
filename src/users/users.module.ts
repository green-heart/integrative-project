import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { UserController } from './controllers/user.controller';
import { User } from './entities/users.entity';
import { UserService } from './services/user.services';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  providers: [UserService, Bcrypt],
  controllers: [UserController],
  exports: [UserService],
})

export class UserModule {}