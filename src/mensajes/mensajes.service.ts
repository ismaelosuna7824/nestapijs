import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menseje } from './entities/menseje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(@InjectRepository(Menseje) private readonly MensajeRepository: Repository<Menseje>){}

    async getAll():Promise<Menseje[]>{
        return await this.MensajeRepository.find(); 
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto):Promise<Menseje>{
        const nuevoMensaje = new Menseje();
        nuevoMensaje.mensaje = mensajeNuevo.mensaje;
        nuevoMensaje.nick = mensajeNuevo.nick;

        return this.MensajeRepository.save(nuevoMensaje);
    }

    async updateMensaje(id:number, mensajeActualizar: CreateMensajeDto):Promise<Menseje>{
        const mensajeUpdate = await this.MensajeRepository.findOne(id);
        mensajeUpdate.nick = mensajeActualizar.nick;
        mensajeUpdate.mensaje = mensajeActualizar.mensaje;

        return await this.MensajeRepository.save(mensajeUpdate);
    }

    async deleteMensaje(id:number):Promise<any>{
        return await this.MensajeRepository.delete(id);
    }

    async getOne(id: number){
        return await this.MensajeRepository.findOne(id);
        
    }

}
