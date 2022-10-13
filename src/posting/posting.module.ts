import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostingController } from './controllers/posting.controller';
import { Posting } from './entities/posting.entity';
import { PostingService } from './services/posting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posting])],
  providers: [PostingService],
  controllers: [PostingController],
  exports: [TypeOrmModule]
})

export class PostingModule {}