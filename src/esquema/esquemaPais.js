import { Schema, model } from "mongoose";

const esquemaPais = new Schema(
    {
        nombre : {type: String, required: true},
        idioma : {type: String, required: true},
        moneda : {type: String, required: true},
        independencia : {type: Date, required: true},
        lema : {type: String, required: true},
        lugarPorSuperficie : {type: Number, required: true}
    })

export default model ("Paises", esquemaPais);