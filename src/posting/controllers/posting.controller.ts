import { Body, Delete, Param, ParseIntPipe,Controller, Get, HttpCode, HttpStatus } from "@nestjs/common"
import { Posting } from "../entities/posting.entity";
import { PostingService } from "../services/posting.service";

@Controller ("/posting")
export class PostingController {
    constructor (private readonly postService: PostingService) { }

@Get()
@HttpCode (HttpStatus.OK)
findAll (): Promise<Posting[]> {
    return this.postService.findAll ();
}

@Get ('/:id')
@HttpCode(HttpStatus.OK)
findById (@Param('id', ParseIntPipe)id: number): Promise<Posting> {
    return this.postService.findById(id)
}



}

