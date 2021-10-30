import React from "react";
import swal from 'sweetalert';

export const createOK = ()=>{
    swal({
        title: "Usuario Creado Exitosamente",
        text:'',
        icon: "success",
        button: "Aceptar"
    })
    
}

export const createNoOK = ()=>{
    swal({
        title: "Correo ya se encuentra registrado",
        text:'',
        icon: "warning",
        button: "Aceptar"
    })
}
export const sessionIN = ()=>{
    swal({
        title: "WELCOME",
        text:'',
        icon: "success",
        button: "Aceptar"
    })
}

export const sessionOUT = ()=>{
    swal({
        title: "GOODBYE",
        text:'',
        icon: "warning",
        button: "Aceptar"
    })
}

export const sessionERR = ()=>{
    swal({
        title: "Usuario o Contraseña incorrecta",
        text:'',
        icon: "error",
        button: "Aceptar"
    })
}