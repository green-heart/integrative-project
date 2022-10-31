import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bcrypt } from '../../auth/bcrypt/bcrypt';
import { User } from '../entities/users.entity';

@Injectable ()
export class UserService {
    constructor (
        @InjectRepository (User)
        private userRepository: Repository <User>,
        private bcrypt: Bcrypt
    ) { }

    async findByUser (username: string): Promise <User> {
        return await this.userRepository.findOne ({
            where: {username: username}
        })
    }

    async findByEmail (email: string): Promise <User> {
        return await this.userRepository.findOne ({
            where: {email: email}
        })
    }

    async findAll (): Promise <User []> {
        return await this.userRepository.find ({
            relations:{posting: true}
        });
    }

    async findById (id: number): Promise <User> {
        let user = await this.userRepository.findOne ({
            where: {id},
            relations: {posting: true}
        });

        if (!user)
            throw new HttpException('User was not found', HttpStatus.NOT_FOUND);

        return user;
    }

    async create (username: User): Promise <User> {
        let searchUser = await this.findByUser(username.username);

        if (!searchUser) {
            username.password = await this.bcrypt.encryptPassword (username.password)
            return await this.userRepository.save (username);
        }
        throw new HttpException ("User was not found", HttpStatus.BAD_REQUEST);
    }

    async update (username: User): Promise <User> {

        let updateUser: User = await this.findById (username.id);
        let searchUser = await this.findByUser (username.username);
        let searchEmail = await this.findByEmail (username.email)

        if (!updateUser)
            throw new HttpException ('User was not found', HttpStatus.NOT_FOUND);

        if (searchUser && searchUser.id !== username.id)
            throw new HttpException ('Username already exists', HttpStatus.BAD_REQUEST);

        if (searchEmail && searchEmail.id !== username.id)
            throw new HttpException ('E-mail already exists', HttpStatus.BAD_REQUEST);

        username.password = await this.bcrypt.encryptPassword (username.password)
        return await this.userRepository.save (username);
    }

}