import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeController } from './controllers/theme.controller';
import { Theme } from './entities/theme.entity';
import { ThemeService } from './service/theme.service';

@Module({
  imports: [TypeOrmModule.forFeature([Theme])],
  providers: [ThemeService],
  controllers: [ThemeController],
  exports: [TypeOrmModule]
})

export class ThemeModule {}