import React from "react";
import './subtitles.css'

interface ITitle{
    nome: string
}

function Subtitles(props:any){
    return(
        <h1 id="subtitles">Projeto de conclusão do Bootcamp Full-Stack (Javascript) da Generation Brasil. O projeto tem como tema o objetivo 13 de desenvolvimento sustentável da ONU.
        O projeto Green Heart se trata de uma rede social que tem como objetivo a mobilização de pessoas engajadas com o combate contra as mudanças climáticas no planeta.</h1>
    );
}


export{Subtitles};