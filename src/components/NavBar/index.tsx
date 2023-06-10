import { link } from 'fs/promises';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Nav, LeftArrow, Image, ButtonHidden, Text, Title, Icon, DivIcon } from './styles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


const NavBar = () => {
  const [backOffNav, setbackOffNav] = useState(false);
  const slideHandler = () => {
    setbackOffNav((prevState) => !prevState);
  };
  return (
    <Nav className={`${backOffNav ? 'back-off' : ''}`}>
      <Title>{"João Ryan"}</Title>
      <Text>{"Graduando engenharia de software, desenvolvedor fullstack"}</Text>
      <DivIcon>
        <Icon>
          <a href="https://github.com/joaoryan" target="_blank"><AiFillGithub /></a>
        </Icon>
        {/*
        <Icon>
          <AiFillInstagram />
        </Icon>
        */}
        <Icon>
          <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank"><AiFillLinkedin /></a>
        </Icon>
        {/*
        <Icon>
          <AiFillTwitterCircle />
        </Icon>
        */}
      </DivIcon>
      <NavLinks hidden={backOffNav} />
    </Nav>
  );
};

export default NavBar;
