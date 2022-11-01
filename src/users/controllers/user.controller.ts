import { Body, Controller, Get, HttpCode, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";

import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { User } from "../entities/users.entity";
import { UserService } from "../services/user.services";

@ApiTags('User')
@Controller ('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

        @ApiBearerAuth()
        @UseGuards (JwtAuthGuard)
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

        @ApiBearerAuth()
        @UseGuards (JwtAuthGuard)
        @Put ('/update')
        @HttpCode (HttpStatus.OK)
        async update (@Body () username: User): Promise <User> {
            return this.userService.update (username)
        }
}