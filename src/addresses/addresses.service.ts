import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressesService {

    constructor(@InjectRepository(Address) private usersRepository: Repository<Address>) { }

    async createAddress(address: Address) {
        return await this.usersRepository.save(address)
    }
}