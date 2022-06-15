import { EncargadoEmpresa } from '../models/EncargadoEmpresa.js'
import { Usuario } from '../models/Usuario.js';

export const createEncargadoEmpresa = async (request, response) =>{

    try{
        // console.log('request', request);
        // Tomo parametros de la request.
        const { cargo, telefono, id_usuario, id_empresa} = request.body.encargadoEmpresa;

         console.log('request body', request.body);
         console.log('request body encargadoEmpresa', request.body.encargadoEmpresa);


         const encargadoEmpresaRepetida = await Usario.findOne({
            where: {
              rut: rut
            }
          })
  
          if(encargadoEmpresaRepetida){
            return response.status(401).json({
              ok: false,
              msg: 'No se agregó el encargado empresa, porque ya está registrado.'
          })
          }

        // Crear en la bdd
        const newEncargadoEmpresa = await EncargadoEmpresa.create({
            cargo,
            telefono,
            id_usuario: id_usuario,
            id_empresa: id_empresa
        })

        return response.status(200).json({
            ok: true,
            msg: 'Encargado Empresa added.'
        })
    }catch(error){
        return response.status(401).json({
            ok: false,
            msg: 'Didnt added Encargado Empresa.'
        })
    }
}