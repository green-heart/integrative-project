import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Theme } from "../entities/theme.entity";
import { ThemeService } from "../service/theme.service";

@ApiTags ('Theme')
@UseGuards (JwtAuthGuard)
@Controller ('/theme')
@ApiBearerAuth()
export class ThemeController{
    constructor (private readonly themeService: ThemeService) { }

    @Get ('/theme/all')
    @HttpCode (HttpStatus.OK)
    findAll (): Promise <Theme []> {
        return this.themeService.findAll();
    }

    @Get ('/:id')
    @HttpCode (HttpStatus.OK)
    findbyId (@Param ('id', ParseIntPipe) id: number): Promise <Theme> {
        return this.themeService.findById (id)
    }

    @Get ('/classfication/:classfication')
    @HttpCode (HttpStatus.OK)
    findByClassification (@Param ('classfication') classfication: string): Promise <Theme []> { 
        return this.themeService.findByClassification (classfication);
    }

    @Post ('/create')
    @HttpCode (HttpStatus.CREATED)
    create (@Body () theme: Theme): Promise <Theme> {
        return this.themeService.create (theme);
    }

    @Put ('/put')
    @HttpCode (HttpStatus.OK)
    update (@Body () theme: Theme): Promise <Theme> {
        return this.themeService.update (theme);
    }

    @Delete ('/:id')
    @HttpCode (HttpStatus.NO_CONTENT)
    delete (@Param ('id', ParseIntPipe) id: number) {
        return this.themeService.delete (id);
    }
}
