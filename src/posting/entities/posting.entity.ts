import { IsNotEmpty } from "class-validator";
import { Theme } from "../../theme/entities/theme.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Theme, (theme) => theme.posting, {
        onDelete: 'CASCADE'
    })
    theme: Theme
}