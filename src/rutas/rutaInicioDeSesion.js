import { Router } from "express";
import controladorInicioDeSesion from "../controlador/controladorInicioDeSesion.js";


const enrutadorInicioDeSesion = Router();

enrutadorInicioDeSesion.post("/", controladorInicioDeSesion.IniciarSesion);
    


export default enrutadorInicioDeSesion;