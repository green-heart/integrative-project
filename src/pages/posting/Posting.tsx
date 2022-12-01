import React from 'react';
import './Posting.css';
import { Text } from '../../components/text/Text';
import { Subtitles } from '../../components/subtitles/subtitles';
import { Imagens } from '../../components/imagens/Imagens';

function Posting(){
    return(
        <>
        <Subtitles/>
        <Text>Projeto de conclusão do Bootcamp Full-Stack (Javascript) da Generation Brasil. O projeto tem como tema o objetivo 13 de desenvolvimento sustentável da ONU.
O projeto Green Heart se trata de uma rede social que tem como objetivo a mobilização de pessoas engajadas com o combate contra as mudanças climáticas no planeta. </Text>
        <Imagens/>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolore eius totam rem saepe quasi animi? Voluptates temporibus non et. Veniam inventore dolor non temporibus maxime reiciendis, dolorum alias. Et.</h1>
        </>
    )
}

export {Posting}