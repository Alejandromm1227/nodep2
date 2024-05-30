import express from "express";

const servidor = express();

servidor.use(express.json());

servidor.get("/", (solicitud,respuesta) => {
    respuesta.status(404).send("Servidor no encontrado");
})

export default servidor;