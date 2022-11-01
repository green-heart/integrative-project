import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Posting } from './posting/entities/posting.entity';
import { PostingModule } from './posting/posting.module';
import { Theme } from './theme/entities/theme.entity';
import { ThemeModule } from './theme/theme.module';
import { User } from './users/entities/users.entity';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_green_heart',
      entities: [Posting, Theme, User],
      synchronize: true
    }),
    PostingModule,
    ThemeModule,
    AuthModule,
    UserModule
   ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
