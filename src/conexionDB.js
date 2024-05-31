import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato) => {
    console.log("Funciona! Conectado a la base de datos");
}).catch((err) => {
    console.log("Error, algo salio mal");
});