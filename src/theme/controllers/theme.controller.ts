import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

import { Theme } from "../entities/theme.entity";
import { ThemeService } from "../service/theme.service";

@Controller ('/theme')
export class ThemeController{
    constructor (private readonly themeService: ThemeService) { }

    @Get ()
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

    @Post ()
    @HttpCode (HttpStatus.CREATED)
    create (@Body () theme: Theme): Promise <Theme> {
        return this.themeService.create (theme);
    }

    @Put ()
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
