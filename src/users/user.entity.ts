import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import {Address} from "../addresses/address.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string; 

    @Column('date')
    birthday:Date;

    @Column({type:"boolean"})
    isActive:boolean;

    @OneToOne(() => Address, address => address.user)
    address: Address;

}