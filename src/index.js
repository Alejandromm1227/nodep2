import "dotenv/config";
import "./conexionDB.js"
import servidor from "./servidor.js";

servidor.listen(4000, ()  =>{
    console.log("El servidor esta en linea");
})