import esquemaPais from "../esquema/esquemaPais.js";

const controladorPais = {
    crearPais: async (solicitud, respuesta) => {
        try {
            const nuevoPais = new esquemaPais(solicitud.body);
            /* console.log(nuevoPais); */
            const paisCreado = await nuevoPais.save();
            console.log(paisCreado);
            if (paisCreado._id) {
                respuesta.json({
                    resultado : "bien",
                    mensaje : "País creado",
                    datos : paisCreado._id
                });
            }
        }
        catch (error) {
                respuesta.json({
                    resultado : "mal",
                    mensaje : "error al crear País",
                    datos : error
         });  
    }},
    leerPaises: async (solicitud, respuesta) => {
        try{
        const todosLosPaises = await esquemaPais.find();
        console.log("todos", todosLosPaises);
            respuesta.json({
                respuesta : "Works!",
                mensaje : "Paises leidos",
                datos : todosLosPaises
            });
     }  catch(error){
        respuesta.json({
            respuesta : "Don´t Works! ",
            mensaje : "ocurrio un error al leer todos los paises",
            datos : error    
    });
}
},
    leerPais: async (solicitud, respuesta) => {
        try {
        const Paisleido = await esquemaPais.findById(solicitud.params.id);
        if (Paisleido._id) {
            respuesta.json({
                respuesta : "Works!",
                mensaje : "País Leido",
                datos : Paisleido
            });
        }
    } catch (error){
        respuesta.json({
            respuesta : "error",
            mensaje : "ocurrio un error al leer el País",
            datos : error
        });
    }
},
actualizarPais: async (solicitud, respuesta) => {
    try {
     const paisActualizado = await esquemaPais.findByIdAndUpdate(solicitud.params.id,solicitud.body);
     if (paisActualizado._id) {
         respuesta.json({
             resultado : "Works!",
             mensaje : "País actualizado",
             datos : paisActualizado._id
         });
     }
    } catch (error) {
      respuesta.json({
         resultado : "Error",
         mensaje : "error al actualizar País",
         datos : error
      });
    }
 },
 eliminarPais: async (solicitud, respuesta) => {
    try {
        const paisEliminado = await esquemaPais.findByIdAndDelete(solicitud.params.id);
        if (paisEliminado._id) {
            respuesta.json({
                respuesta : "Works!",
                mensaje : "País eliminado",
                datos : null
            });
        }
    } catch (error){
        respuesta.json({
            respuesta : "Error",
            mensaje : "ocurrio un error al eliminar el País",
            datos : error
        });
    }
}
}


export default controladorPais;