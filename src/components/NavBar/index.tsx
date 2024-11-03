import React, { useState } from 'react';

import NavLinks from './NavLinks';

import * as Styled from './styled';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import img from '../../assets/image/joao-ryan.png'

const NavBar = () => {
  const [backOffNav, setbackOffNav] = useState(false);

  return (
    <Styled.Nav>
      <Styled.Img>
        <img src={img} />
        <Styled.Title>{"João Ryan"}</Styled.Title>
      </Styled.Img>
      <Styled.Text>{"Graduando engenharia de software, desenvolvedor fullstack"}</Styled.Text>
      <Styled.DivIcon>
        <Styled.Icon>
          <a href="https://github.com/joaoryan" target="_blank"><AiFillGithub /></a>
        </Styled.Icon>
        <Styled.Icon>
          <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank"><AiFillLinkedin /></a>
        </Styled.Icon>
      </Styled.DivIcon>
      <NavLinks hidden={backOffNav} />
    </Styled.Nav>
  );
};

export default NavBar;
