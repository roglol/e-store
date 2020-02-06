import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {Address} from '../addresses/address.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Address) private addressesRepository: Repository<Address>
        ) { }

    async getUsers(user: User): Promise<User[]> {
         return await this.usersRepository.find();

    }

    async getUser(_id: number): Promise<User[]> {
       let user = await this.usersRepository.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
       if(!user.length){
           throw new HttpException('Not found', HttpStatus.NOT_FOUND)
       }
       return user
        // return await this.addressesRepository.find({
        //         userId: _id
        // });
    }
    async createUser(user: User) {
        return await this.usersRepository.save(user)
    }

    async updateUser(id:string,user: User) {
         return await this.usersRepository.update(id, user)
    }

    async deleteUser(user: User) {
        return await this.usersRepository.delete(user);
    }
}