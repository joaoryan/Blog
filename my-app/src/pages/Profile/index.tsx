import React, { ChangeEvent, useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from '../../services/axios';

//styles
import * as Styled from './styled';
//icons


export function Profile(): JSX.Element {

  return (
    <Styled.Page>
      <Styled.Container>
        <Styled.Title>Sobre mim</Styled.Title>
        <Styled.Text>
          Meu nome é João Ryan dos Santos, nasci em Santa Rita do Sapucaí/MG e sou um desenvolvedor
        </Styled.Text>
        <Styled.Text>
          Sou graduando de engenharia de software no <a href="http://www.toptal.com/" target="_blank" rel="noopener noreferrer"> Instituto Nacional de Telecomunicações - Inatel</a>,
          Atualmente trabalho na empresa <a href="http://www.toptal.com/" target="_blank" rel="noopener noreferrer">pratica klimaquip</a>. já tive outro trabalho antes na area agricola...
          E por que eu trabalho com progamação agora? Ah… porque progamaçoão é incrível, a facilidade em aprender
          cada dia mais e ainda poder ajudar um grande número de pessoas me deixa feliz e realizado todos os dias.
        </Styled.Text>
        <Styled.Text>
          Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
          gosto de ensinar meus amigos sobre alguma coisa que aprendi, acho que por isso nasceu esse blog.
        </Styled.Text>
        <Styled.SubTitle>Contato</Styled.SubTitle>
        <Styled.Text>
          Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.
        </Styled.Text>
        <Styled.DivIcon>
          <Styled.Icon >
            <a href="http://www.toptal.com/"><AiFillGithub /></a>
          </Styled.Icon>
          <Styled.Icon>
            <a href="http://www.toptal.com/"><AiFillInstagram /></a>
          </Styled.Icon>
          <Styled.Icon>
            <a href="http://www.toptal.com/"><AiFillLinkedin /></a>
          </Styled.Icon>
          <Styled.Icon>
            <a href="http://www.toptal.com/"><AiFillTwitterCircle /></a>
          </Styled.Icon>
        </Styled.DivIcon>
      </Styled.Container>
    </Styled.Page>
  );
}
