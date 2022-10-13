import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: "tb_posting"})
export class Posting {

    @PrimaryGeneratedColumn ()
    id: number

    @IsNotEmpty ()
    @Column ({length: 100, nullable: false})
    text: string

    @Column ({length: 255})
    image: string

    @Column({length: 255})
    location: string

    @CreateDateColumn ()
    date: Date
}