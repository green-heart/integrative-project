import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";

import { Posting } from "../entities/posting.entity";

@Injectable ()
export class PostingService {
    constructor (
        @InjectRepository (Posting)
        private postingRepository: Repository <Posting>) {}
    
    /**
     * @desc To find everything posted
     * @example
     * http://localhost:4000/posting
     */
    async findAll (): Promise <Posting []> {
        return await this.postingRepository.find ({
            relations: {theme: true}
        });
    }

    /**
     * @desc To find a post this by id
     * @throw HttpException if id not found
     * @example
     * http://localhost:4000/posting/(id)
     */
    async findById (id: number) : Promise <Posting> {
        let searchPost = await this.postingRepository.findOne({
            where: {id}, 
            relations: {theme: true}
        });
        if (!searchPost)
            throw new HttpException ('Post not found', HttpStatus.NOT_FOUND);
        return searchPost;
    }

    /**
     * @desc To find a post this by id
     * @example
     * http://localhost:4000/posting/text/(text)
     */
    async findByText (text: string): Promise <Posting []> {
        return await this.postingRepository.find ({
            where: {text: ILike(`%${text}%`)},
            relations: {theme: true}
        });
    }

    /**
     * @desc Create a post in database
     * @param 'Put' a text, image, location and date (date is automatically inserted)
     * @example
     * "text": "ssss", "image": "url/image", "location": "your location", "themeId": "themeId"
     */
    async create (posting: Posting): Promise <Posting> {
        return await this.postingRepository.save (posting)
    }

    /**
     * @desc Updating a post from the database
     * @param 'Put' a new text, image, location and date (date is automatically inserted)
     * @throw HttpException if id not found
     * @example
     * "text": "New", "image": "Newurl/image", "location": "your new location", "themeId": "NewthemeId"
     */
    async update (posting: Posting): Promise <Posting> {
        let searchPost: Posting = await this.findById (posting.id)

        if (!searchPost || !posting.id)
            throw new HttpException ('Post not found!', HttpStatus.NOT_FOUND)
        return await this.postingRepository.save (posting)
    }

     /**
     * @desc Delete a post
     * @param id the identify to delete post
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