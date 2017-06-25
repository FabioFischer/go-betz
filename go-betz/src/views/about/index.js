import React from 'react';

const ExternalLink = (text, url) => <a href={url || '#'}>{text}</a>;
const Fabio = () => ExternalLink('Fabio L. Fischer', 'https://www.linkedin.com/in/fábio-fischer-08a778120/');
const Matheus = () => ExternalLink('Matheus F. Klauberg', 'https://www.linkedin.com/in/matheus-felipe-klauberg-91273897/');
const CounterStrike = () => ExternalLink('Counter Strike: Global Offensive (CS:GO)', 'https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive');
const Steam = () => ExternalLink('Steam', 'http://steamcommunity.com')

const Content = () => (
  <div>
    <p>
      Este site foi desenvolvido como trabalho pelos alunos <Fabio /> e <Matheus /> para a matéria de Desenvolvimento de Sistemas Seguros, ministrada pelo professor Luz Angelo Heinzen, no curso de Bacharelado em Ciências da Computação, na Fundação Universidade Regional de Blumenau - FURB.
    </p>
    <p>
      O site tem como objetivo permitir a seus usuários realizarem apostas em partidas de campeonatos do jogo <i><CounterStrike /></i> utilizando de itens presentes em seus inventários na <Steam />, realizando trocas com bots do sistema, que os guardam até o usuário resgata-los.
    </p>
    <p>
      Ao apostar em um time vencedor, o usuário receberá o valor de seus itens apostados, acrescentando o seu percentual sobre o valor total apostado, enquanto ao apostar em um time perdedor, o usuário perde todos os seus itens.
    </p>
    <p>
      Em todas as partidas em que apostas são realizadas, o sistema fica com 10% do valor total apostado.
     </p>
  </div>
);

const About = () => (
  <div className='about page inner--page'>
    <div className='about--content'>
      <h3>Sobre</h3>
      <Content />
    </div>
  </div>
);

export default About;