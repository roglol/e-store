import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    address:string;
}
