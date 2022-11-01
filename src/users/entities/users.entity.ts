import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Posting } from "../../posting/entities/posting.entity";

@Entity ({name: "users_tb"})
export class User {

    @PrimaryGeneratedColumn ()
    @ApiProperty()
    public id: number

    @IsNotEmpty ()
    @Column ({ length: 255 , nullable: false })
    @ApiProperty()
    public name: string

    @IsNotEmpty ()
    @Column ({ length: 255 , nullable: false })
    @ApiProperty()
    public username: string

    @IsEmail ()
    @Column ({ length: 255, nullable: false })
    @ApiProperty()
    public email: string

    @IsNotEmpty ()
    @MinLength (8)
    @Column ({ length: 255, nullable: false })
    @ApiProperty()
    public password: string

    @Column ({ length: 5000 })
    @ApiProperty()
    public photo: string

    @ApiProperty()
    @OneToMany (() => Posting , (posting)  => posting.user)
    posting: Posting []

}