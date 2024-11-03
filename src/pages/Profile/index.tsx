import React from 'react';
//styles
import * as Styled from './styled';
//icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Profile(): JSX.Element {
  return (
    <Styled.Page>
      <Styled.Container>
        <Styled.Title>Sobre mim</Styled.Title>
        <Styled.Text>
          Meu nome é João Ryan dos Santos, nasci em Santa Rita do Sapucaí/MG e sou desenvolvedor pleno Full Stack. Sou graduando em
          Engenharia de Software no <a href="https://inatel.br/home/" target="_blank" rel="noopener noreferrer"> Instituto Nacional de Telecomunicações - Inatel</a> e, atualmente, trabalho na empresa <a href="https://www.praticabr.com" target="_blank" rel="noopener noreferrer">pratica klimaquip</a>.
        </Styled.Text>
        <Styled.Text>
          Com uma base sólida em desenvolvimento web, adquiri habilidades em tecnologias tanto de front-end quanto de back-end, permitindo a criação 
          de interfaces de usuário intuitivas e sistemas robustos que atendem a diversas necessidades. Minha experiência me permite lidar 
          com projetos de ponta a ponta, focando em eficiência e escalabilidade.
        </Styled.Text>
        <Styled.Text>
          Trabalhar com programação é uma oportunidade constante de aprendizado e de criar soluções que impactam positivamente a vida das pessoas.
        </Styled.Text> 
        <Styled.SubTitle>Contato</Styled.SubTitle>
        <Styled.Text>
          Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.
        </Styled.Text>
        <Styled.DivIcon>
          <Styled.Icon >
            <a href="https://github.com/joaoryan" target="_blank"><AiFillGithub /></a>
          </Styled.Icon>
          <Styled.Icon>
            <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank"><AiFillLinkedin /></a>
          </Styled.Icon>
        </Styled.DivIcon>
      </Styled.Container>
    </Styled.Page>
  );
}
