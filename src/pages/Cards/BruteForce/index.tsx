import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../styled';
import { MdArrowBackIos } from "react-icons/md";

export function TestBruteForce(): JSX.Element {
  const navigate = useNavigate();
  
  return (
    <Styled.Page>
      <Styled.Container>
        <Styled.BackPage onClick={() => navigate('/')}>
          <MdArrowBackIos />
          <text>voltar</text>
        </Styled.BackPage>
        <Styled.Title>Teste de Vulnerabilidade com Força Bruta</Styled.Title>
        <Styled.Text>
          Neste artigo, discutiremos o teste de vulnerabilidade com força bruta, uma técnica comum utilizada para explorar 
          falhas de segurança em sistemas. Vamos explicar como funciona, os diferentes tipos de ataques de força bruta 
          e medidas de proteção para prevenir tais vulnerabilidades.
        </Styled.Text>
        <Styled.SubTitle>O que é um Ataque de Força Bruta?</Styled.SubTitle>
        <Styled.Text>
          Um ataque de força bruta é uma tentativa de adivinhar senhas ou chaves de criptografia experimentando todas as 
          combinações possíveis até encontrar a correta. Este tipo de ataque pode ser conduzido manualmente ou por meio 
          de ferramentas automatizadas.
        </Styled.Text>
        <Styled.SubTitle>Tipos de Ataques de Força Bruta</Styled.SubTitle>
        <Styled.Text>
          Existem diferentes variações de ataques de força bruta, incluindo:
        </Styled.Text>
        <Styled.List>
          <Styled.ListItem>
            <b>Ataque de Força Bruta Pura:</b> Tenta todas as combinações possíveis de caracteres até encontrar a senha certa.
          </Styled.ListItem>
          <Styled.ListItem>
            <b>Ataque de Dicionário:</b> Usa uma lista predefinida de palavras, como senhas comuns, para tentar adivinhar a senha.
          </Styled.ListItem>
          <Styled.ListItem>
            <b>Ataque de Força Bruta Inversa:</b> Começa com uma senha conhecida para tentar adivinhar o nome de usuário associado.
          </Styled.ListItem>
          <Styled.ListItem>
            <b>Ataque de Preenchimento de Credenciais:</b> Usa credenciais comprometidas de um vazamento de dados para acessar outras contas.
          </Styled.ListItem>
        </Styled.List>
        <Styled.SubTitle>Exemplos de Teste de Força Bruta</Styled.SubTitle>
        <Styled.Text>
          Vamos ver alguns exemplos básicos de ataques de força bruta em cenários reais:
        </Styled.Text>
        <Styled.List>
          <Styled.ListItem>
            <b>Exemplo 1:</b> Um ataque automatizado que tenta adivinhar a senha de uma conta de e-mail, utilizando 
            um script que testa milhares de combinações por segundo.
          </Styled.ListItem>
          <Styled.ListItem>
            <b>Exemplo 2:</b> Uso de uma ferramenta como "Hydra" para realizar ataques de força bruta em serviços SSH 
            ou FTP, tentando diferentes combinações de nome de usuário e senha.
          </Styled.ListItem>
        </Styled.List>
        <Styled.SubTitle>Medidas de Prevenção</Styled.SubTitle>
        <Styled.Text>
          Algumas práticas para proteger sistemas contra ataques de força bruta incluem:
        </Styled.Text>
        <Styled.List>
          <Styled.ListItem>
            <b>Usar autenticação multifator (MFA):</b> Adiciona uma camada extra de segurança além da senha.
          </Styled.ListItem>
          <Styled.ListItem>
            <b>Bloquear contas após várias tentativas falhas:</b> Previne que atacantes realizem muitas tentativas consecutivas.
          </Styled.ListItem>
          <Styled.ListItem>
            <b>Implementar senhas fortes e complexas:</b> Tornam os ataques de força bruta menos eficazes.
          </Styled.ListItem>
        </Styled.List>
        <Styled.Text>
          Muito obrigado por ler! Para mais informações, conecte-se comigo no 
          <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank">LinkedIn</a> ou no 
          <a href="https://github.com/joaoryan" target="_blank">Github</a>.
        </Styled.Text>
      </Styled.Container>
    </Styled.Page>
  );
}
