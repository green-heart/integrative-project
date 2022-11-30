import * as React from 'react';
import './footer.css'

interface ITitle{
    nome: string
}

function Footer (props:any){
    return(
        <h1 id="footer" >Green Heart - Todos os Direitos reservados</h1>
    );
}


export{Footer}