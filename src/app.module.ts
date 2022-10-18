import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posting } from './posting/entities/posting.entity';
import { PostingModule } from './posting/posting.module';
import { Theme } from './theme/entities/theme.entity';
import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_green_heart',
      entities: [Posting, Theme],
      synchronize: true
    }),
    PostingModule,
    ThemeModule
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}
