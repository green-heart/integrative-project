import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike } from "typeorm/find-options/operator/ILike";
import { Repository } from "typeorm/repository/Repository";
import { Theme } from "../entities/theme.entity";

@Injectable()
export class ThemeService {
   
   
   /**
     * @desc Deletes a database theme
     * @param id The theme identifier to be deleted.
     * @returns Empty Content
     * @Example 
     * delete(2); // It is going to delete the id theme = 2
     * delete(5); // It is going to delete the id theme = 5
     */
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    update(theme: Theme): Promise<Theme> {
        throw new Error("Method not implemented.");
    }
    create(theme: Theme): Promise<Theme> {
        throw new Error("Method not implemented.");
    }
    findByDescription(classfication: string): Promise<Theme[]> {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(Theme)
        private themeRepository: Repository<Theme>
    ) {}

    async findAll (): Promise<Theme[]>{
        return await this.themeRepository.find({
        })
    }

    async findById (id: number): Promise<Theme> {
        let theme = await this.themeRepository.findOne({
            where: {id}
        })

        if (!theme)
            throw new HttpException('Tema nÃ£o encontrado', HttpStatus.NOT_FOUND)
        return theme;
    }

    async findByClassification (classification: string): Promise<Theme[]> {
        return await this.themeRepository.find({
            where: {
                classification: ILike(`%${classification}%`)
            }
        })
    }

    async findByTypes (types: string): Promise<Theme[]> {
        return await this.themeRepository.find({
            where: {types: ILike(`%${types}%`)}
        })
    }

}