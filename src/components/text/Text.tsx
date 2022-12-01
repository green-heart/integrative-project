import React from "react";
import './Text.css'

interface ITitle{
    nome: string
}

function Text(props:any){
    return(
        <h3> {props.nome}</h3>
    );
}


export{Text};