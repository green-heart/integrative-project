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
    findByDescription(classfication: string): Promise<Theme[]> {
        throw new Error("Method not implemented.");
    }

    constructor(@InjectRepository(Theme) private themeRepository: Repository<Theme>) {}

    async findAll (): Promise<Theme[]>{
        return await this.themeRepository.find({
            relations: {posting: true}
        })
    }

    async findById (id: number): Promise<Theme> {
        let theme = await this.themeRepository.findOne({
            where: {id},
            relations: {posting: true}
        });
        if (!theme)
            throw new HttpException('Tema nÃ£o encontrado', HttpStatus.NOT_FOUND)
        return theme;
    }

    async findByClassification (classification: string): Promise<Theme[]> {
        return await this.themeRepository.find({
            where: {classification: ILike(`%${classification}%`)},
            relations: {posting: true}
        })
    }

    async findByTypes (types: string): Promise<Theme[]> {
        return await this.themeRepository.find({
            where: {types: ILike(`%${types}%`)},
            relations: {posting: true}
        })
    }

    async create (theme: Theme): Promise <Theme> {
        return await this.themeRepository.save(theme);
    }

    async update (theme: Theme): Promise <Theme> {
        let searchTheme: Theme = await this.findById(theme.id);

        if(!searchTheme || !theme.id) 
            throw new HttpException ('Theme not found!', HttpStatus.NOT_FOUND);
        return await this.themeRepository.save(theme);   
    }

    async delete (id: number): Promise <DeleteResult> {
        let searchTheme = await this.findById (id);

        if (!searchTheme)
            throw new HttpException ('Theme not found!', HttpStatus.NOT_FOUND);
        return await this.themeRepository.delete(id);
    }
}
