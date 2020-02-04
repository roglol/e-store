import { Entity, Column, PrimaryGeneratedColumn, OneToOne,JoinColumn } from 'typeorm';
import {User} from '../users/user.entity';
@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    address:string;

    @Column()
    userId: number;
    @OneToOne(() => User, user => user.address)
    @JoinColumn({name:'userId'})
    user: User;
}
