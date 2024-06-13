import jwt from "jsonwebtoken";

export function generarToken (payload){
    return new Promise((resolve, reject) => {
        jwt.sign(payload, "llave secreta", {expiresIn: "1h"}, (error, token) => {
            if (error) {
                reject({error});
            } else {
                resolve({token});
            }
        })
    })
}