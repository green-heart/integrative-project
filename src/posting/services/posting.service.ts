import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Posting } from "../entities/posting.entity";


@Injectable ()
export class PostingService {

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

}