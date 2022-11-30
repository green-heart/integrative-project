import React from "react";
import './title.css'

interface ITitle{
    nome: string
}

function Title(props:any){
    return(
        <h1> {props.nome}</h1>
    );
}


export{Title};