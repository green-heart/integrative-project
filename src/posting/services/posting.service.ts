import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";

import { Posting } from "../entities/posting.entity";

@Injectable ()
export class PostingService {
    constructor (
        @InjectRepository (Posting)
        private postingRepository: Repository <Posting>) {}
    
    async findAll (): Promise <Posting []> {
        return await this.postingRepository.find ({
            relations: {theme: true}
        });
    }

    async findById (id: number) : Promise <Posting> {
        let posting = await this.postingRepository.findOne({
            where: {id}, 
            relations: {theme: true}
        });
        if (!posting)
            throw new HttpException ('Post not found', HttpStatus.NOT_FOUND);
        return posting;
    }

    async findByText (text: string): Promise <Posting []> {
        return await this.postingRepository.find ({
            where: {text: ILike(`%${text}%`)},
            relations: {theme: true}
        });
    }

    async create (posting: Posting): Promise <Posting> {
        return await this.postingRepository.save (posting)
    }

    async update (posting: Posting): Promise <Posting> {
        let searchPost: Posting = await this.findById (posting.id)

        if (!searchPost || !posting.id)
            throw new HttpException ('Post not found!', HttpStatus.NOT_FOUND)
        return await this.postingRepository.save (posting)
    }

     /**
     * @desc Delete a post
     * @param id the identify to delete post
     * @returns void
     * @throw HttpException if id not found
     * @example
     * delete(2) // the post 2 will be delete
     */
    async delete (id:number): Promise <DeleteResult> {
        let searchPost = await this.findById (id);

        if (!searchPost)
            throw new HttpException ('Post not found!', HttpStatus.NOT_FOUND)
        return await this.postingRepository.delete (id);
    }
}