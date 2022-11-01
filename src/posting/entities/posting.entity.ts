import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

import { Theme } from "../../theme/entities/theme.entity";
import { User } from "../../users/entities/users.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity ({name: "tb_posting"})
export class Posting {

    @ApiProperty()
    @PrimaryGeneratedColumn ()
    id: number

    @ApiProperty()
    @IsNotEmpty ()
    @Column ({length: 100, nullable: false})
    text: string

    @ApiProperty()
    @Column ({length: 255})
    image: string

    @ApiProperty()
    @Column ({length: 255})
    location: string

    @ApiProperty()
    @CreateDateColumn ()
    date: Date

    @ApiProperty({type: () => Theme})
    @ManyToOne (() => Theme, (theme) => theme.posting, {
        onDelete: 'CASCADE'
    })
    theme: Theme
    
    @ApiProperty({type:() => User})
    @ManyToOne (() => User, (user) => user.posting, {
        onDelete: 'CASCADE'
    })
    user: User
}