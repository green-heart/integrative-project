import { Post } from "@nestjs/common/decorators";
import { IsNotEmpty } from "class-validator";
import { Posting } from "src/posting/entities/posting.entity";
import { OneToMany } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity({name: "tb_theme"})
export class Theme {

    @PrimaryGeneratedColumn ()
    id: number;

    @IsNotEmpty ()
    @Column ({length: 255, nullable: false})
    classification: string

    @IsNotEmpty ()
    @Column ({length: 50, nullable: false})
    types: string

    @OneToMany (() => Posting, (posting) => posting.theme)
    posting: Posting [];

}