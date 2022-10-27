import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";

import { LocalAuthGuard } from "../../auth/guard/local-auth.guard";
import { User } from "../entities/users.entity";
import { UserService } from "../services/user.services";

@Controller ('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

        @UseGuards (LocalAuthGuard)
        @Get ('/all')
        @HttpCode (HttpStatus.OK)
        findAll (): Promise <User []> {
            return this.userService.findAll ();
        }

        @Post ('/sign_up')
        @HttpCode (HttpStatus.CREATED)
        async create (@Body () user: User): Promise <User> {
            return this.userService.create (user);
        }

        @UseGuards (LocalAuthGuard)
        @Put ('/update')
        @HttpCode (HttpStatus.OK)
        async update (@Body () user: User): Promise <User> {
            return this.userService.update (user)
            }
}