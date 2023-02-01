import React from 'react';


import { Container } from './styles';
import Panel from '../../panel';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Alemanha promete apoio financeiro ao Brasil para preservamento ambiental</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Mudanças climáticas dão impulso ao tráfico de seres humanos</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head"> Adaptando a engenharia as mudanças climáticas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Estudo revela que mudanças climáticas na Amazônia estão afetando o Tibete</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Projeto cria programa para financiar ações de combate às mudanças climáticas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Estudos são desenvolvidos para monitorar as mudanças climáticas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
