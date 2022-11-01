import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle ('integrative-project') 
    .setDescription ('Project integrative-project')
    .setContact ("Generation Brasil", "http://www.generationbrasil.online","generationprojeto@gmail.com")
    .setVersion ('1.0')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument (app, config);
    SwaggerModule.setup ('/swagger', app, document);

        // Declare the brazilian time 
    process.env.TZ = '-03:00';
    // Http requisitions
    app.useGlobalPipes (new ValidationPipe ());
    // Enable Cross Origin
    app.enableCors ();
    // Change Http port
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
