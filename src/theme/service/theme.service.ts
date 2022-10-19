import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm";
import { ILike } from "typeorm/find-options/operator/ILike";
import { Repository } from "typeorm/repository/Repository";

import { Theme } from "../entities/theme.entity";

@Injectable()
export class ThemeService {
    constructor(@InjectRepository (Theme) private themeRepository: Repository<Theme>) {}

    async findAll (): Promise <Theme []> {
        return await this.themeRepository.find ({
            relations: {posting: true}
        })
    }

/**
 * @desc To find a theme by its id
 * @param id identifier to find a theme
 * @example
 * find id(2) // The program will search the id theme 2 in its database
 *
 */
    async findById (id: number): Promise <Theme> {
        let theme = await this.themeRepository.findOne ({
            where: {id},
            relations: {posting: true}
        });
        if (!theme)
            throw new HttpException ('Theme not found!', HttpStatus.NOT_FOUND)
        return theme;
    }

    async findByClassification (classification: string): Promise <Theme []> {
        return await this.themeRepository.find({
            where: {classification: ILike (`%${classification}%`)},
            relations: {posting: true}
        })
    }

    async findByTypes (types: string): Promise <Theme []> {
        return await this.themeRepository.find({
            where: {types: ILike(`%${types}%`)},
            relations: {posting: true}
        })
    }

/**
 * @desc Create a theme
 * @param id will be auto_increment
 * @example 
 * create "Volunteer Works"// The "Volunteers Works " theme will be created
 *  */       
    async create (theme: Theme): Promise <Theme> {
        return await this.themeRepository.save (theme);
    }

/**
 * @desc Update a theme
 * @param id identifier to update a theme
 * @throw HttpException if the 'Id' was not found to update
 * @Example
 * update(2) // the id theme(2) will be updated.
 * 
 */
    async update (theme: Theme): Promise <Theme> {
        let searchTheme: Theme = await this.findById (theme.id);

        if(!searchTheme || !theme.id) 
            throw new HttpException ('Theme not found!', HttpStatus.NOT_FOUND);
        return await this.themeRepository.save (theme);   
    }

/**
 * @desc Delete a theme
 * @param id identifier to delete a theme
 * @throw HttpExcpetion if 'Id' was not found.
 * @example
 * delete(2) // The id theme(2) will be deleted
 * 
 *  */ 
    async delete (id: number): Promise <DeleteResult> {
        let searchTheme = await this.findById (id);

        if (!searchTheme)
            throw new HttpException ('Theme not found!', HttpStatus.NOT_FOUND);
        return await this.themeRepository.delete (id);
    }
}
