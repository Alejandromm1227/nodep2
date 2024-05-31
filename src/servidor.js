import express from "express";
import morgan from "morgan";
import enrutadorPaises from "./rutas/rutaspaises.js";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/paises", enrutadorPaises)


servidor.get("/", (solicitud,respuesta) => {
    respuesta.status(404).send("Servidor no encontrado");
})

export default servidor;