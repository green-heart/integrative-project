import { ParseIntPipe } from "@nestjs/common";
import { Body, Controller, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";

import { User } from "../entities/users.entity";
import { UserService } from "../services/user.services";

@Controller ('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

        @Get ('/all')
        @HttpCode (HttpStatus.OK)
        findAll (): Promise <User []> {
            return this.userService.findAll ();
        }

        @Get ('/id')
        @HttpCode (HttpStatus.OK)
        findById (@Param ('id', ParseIntPipe) id: number): Promise <User> {
            return this.userService.findById (id)
        }

        @Post ('/sign_up')
        @HttpCode (HttpStatus.CREATED)
        async create (@Body () user: User): Promise <User> {
            return this.userService.create (user);
        }

        @Put ('/update')
        @HttpCode (HttpStatus.OK)
        async update (@Body () user: User): Promise <User> {
            return this.userService.update (user)
            }
}