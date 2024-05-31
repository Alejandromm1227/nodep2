import { Router } from "express";
import controladorPais from "../Controlador/controladorPais.js";

const enrutadorPaises = Router();

enrutadorPaises.post("/", controladorPais.crearPais)
enrutadorPaises.get("/", controladorPais.leerPaises)
enrutadorPaises.get("/:id", controladorPais.leerPais)
enrutadorPaises.put("/:id", controladorPais.actualizarPais)
enrutadorPaises.delete("/:id", controladorPais.eliminarPais)

export default enrutadorPaises;