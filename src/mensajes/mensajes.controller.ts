import { Controller, Post, Body, Get, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { get } from 'http';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {

    constructor(private MensajesService: MensajesService){}

    @Post('create')
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
      this.MensajesService.createMensaje(createMensajeDto).then(mensaje => {
        response.status(HttpStatus.CREATED).json(mensaje);
      }).catch(()=>{
        response.response(HttpStatus.FORBIDDEN).json({mensaje: 'error al guardar'});
      });
    }

    @Get()
    getAll(@Res() response){
        this.MensajesService.getAll().then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch(()=>{
            response.response(HttpStatus.FORBIDDEN).json({mensaje: 'error al obtener los datos'});
        });
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje){
       this.MensajesService.updateMensaje(idMensaje, updateMensajeDto).then(mensaje => {
           response.status(HttpStatus.OK).json(mensaje);
       }).catch(()=>{
        response.response(HttpStatus.FORBIDDEN).json({mensaje: 'error al actualizar'});
       });
    }

    @Delete('delete/:id')
    delete(@Res() response, @Param('id') idMensaje){
       this.MensajesService.deleteMensaje(idMensaje).then(res =>{
           response.status(HttpStatus.OK).json(res);
       }).catch(()=>{
        response.response(HttpStatus.FORBIDDEN).json({mensaje: 'error al eliminar'});
       });
    }

    @Post('user/:id')
    getuser(@Param('id') iduser, @Res() response ){
      this.MensajesService.getOne(iduser).then( res =>{
        response.status(HttpStatus.OK).json(res);
      }).catch( () =>{
        response.response(HttpStatus.FORBIDDEN).json({mensaje: 'No se encontro el dato'});
      });
    }


}
