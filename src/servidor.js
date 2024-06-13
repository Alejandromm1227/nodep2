import express from "express";
import morgan from "morgan";
import cors from "cors";
import enrutadorPaises from "./rutas/rutaspaises.js";
import enrutadorInicioDeSesion from "./rutas/rutainicioDeSesion.js";

const servidor = express();

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/paises", enrutadorPaises);
servidor.use("/InicioDeSesion", enrutadorInicioDeSesion);


servidor.get("/", (solicitud,respuesta) => {
    respuesta.status(404).send("Servidor no encontrado");
})

export default servidor;