import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Menseje } from './menseje.entity';

@Entity()
export class Cars {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    color:string;

    @ManyToOne(type => Menseje, mensaje => mensaje.photos)
    mensaje: Menseje;
}
