import { Entity, Column, PrimaryGeneratedColumn, JoinColumn  } from "typeorm";
import { Cars } from './cars.entity';
import { ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Menseje {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nick:string;

    @Column()
    mensaje:string;

    @OneToMany(type => Cars, photo => photo.mensaje)
    photos: Cars[];

}
