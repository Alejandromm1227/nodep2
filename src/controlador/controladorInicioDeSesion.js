import esquemaPais from "../esquema/esquemaPais.js";
import bcryptjs from "bcryptjs";
import { generarToken } from "../ayudas/funciones.js";

const controladorInicioDeSesion = {
    IniciarSesion : async (solicitud, respuesta) => {
        try {
            const {nombre, lema} = solicitud.body;
            const nombreEncontrado = await esquemaPais.findOne({
                nombre: nombre,
            })
            const lemaValidado = await bcryptjs.compare(lema,nombreEncontrado.lema)
            if (lemaValidado) {
                const token = await generarToken({
                    id: nombreEncontrado._id,
                    nombre: nombreEncontrado.nombre, 
                });
                respuesta.json({
                    resultado : "Funciona!",
                    mensaje : "Usuario Logeado",
                    datos : token,
            });
            } else {
                respuesta.json({
                    resultado : "Error!",
                    mensaje : "error un Erro al logear usuario",
                    datos : error,
                });
            }
           
        } catch (error) {
            respuesta.json({
                resultado : "Error!",
                mensaje : "error un Erro al logear usuario",
                datos : error,
            });
        }
        }
}

export default controladorInicioDeSesion;