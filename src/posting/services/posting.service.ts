import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Posting } from "../entities/posting.entity";


@Injectable ()
export class PostingService {
    themeReporsitory: any;

    async findById (id: number) : Promise<Posting> {
        let posting = await this.postRepository.findOne({
            where: {id}, relations: {}
        })
        
        if (!posting)
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND)
        return posting;
    }
    
    constructor(
        @InjectRepository (Posting)
        private postRepository: Repository<Posting>
    ) { }

    async findAll (): Promise <Posting []> {
        return await this.postRepository.find ();
    }

    async create (posting: Posting): Promise<Posting> {
        if (posting.theme) {
            let theme = await this.themeReporsitory.findById(posting.theme.id)

            if (!theme)
                throw new HttpException('Theme not found', HttpStatus.NOT_FOUND)
        }
        return await this.postRepository.save(posting)
    }

    async update (posting: Posting): Promise<Posting> {
        let searchPost: Posting = await this.findById(posting.id)

        if (!searchPost || !posting.id)
            throw new HttpException('Post not found!', HttpStatus.NOT_FOUND)

        if (posting.theme) {
            let theme = await this.themeReporsitory.findById(posting.theme.id)

        if (!theme)
            throw new HttpException('Theme not found', HttpStatus.NOT_FOUND)
        }
        return await this.postRepository.save(posting)
    }

    async delete(id:number): Promise<DeleteResult>{
        let searchPost = await this.findById(id);

        if(!searchPost)
            throw new HttpException('Post not found!', HttpStatus.NOT_FOUND)
        
        return await this.postRepository.delete(id);
    }
}