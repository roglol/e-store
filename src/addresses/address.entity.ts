import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import {User} from '../users/user.entity';
@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    address:string;

    @Column({ length: 255 })
    userId:string;

     @OneToOne(() => User, user => user.address, {
         cascade: true
     })
     user:User;
}
