import { Body, Delete, Param, ParseIntPipe,Controller, Get, HttpCode, HttpStatus, Post, Put } from "@nestjs/common"

import { Posting } from "../entities/posting.entity";
import { PostingService } from "../services/posting.service";

@Controller ("/posting")
export class PostingController {
    constructor (private readonly postingService: PostingService) { }

    @Get ()
    @HttpCode (HttpStatus.OK)
    findAll (): Promise <Posting []> {
        return this.postingService.findAll ();
    }

    @Get ('/:id')
    @HttpCode (HttpStatus.OK)
    findById (@Param ('id', ParseIntPipe) id: number): Promise <Posting> {
        return this.postingService.findById(id)
    }

    @Get ('/text/:text')
    @HttpCode (HttpStatus.OK)
    findByText (@Param ('text') text: string): Promise <Posting []> {
        return this.postingService.findByText (text)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body () posting: Posting): Promise <Posting> {
        return this.postingService.create (posting)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update (@Body () posting: Posting): Promise <Posting> {
        return this.postingService.update (posting);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete (@Param ('id', ParseIntPipe) id: number) {
        return this.postingService.delete (id)
    }
}
