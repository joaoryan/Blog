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
      <Text>{"Aqui devo escrever uma breve introdução"}</Text>
      <DivIcon>
        <Icon>
          <AiFillGithub />
        </Icon>
        <Icon>
          <AiFillInstagram />
        </Icon>
        <Icon>
          <AiFillLinkedin />
        </Icon>
        <Icon>
          <AiFillTwitterCircle />
        </Icon>
      </DivIcon>
      <NavLinks hidden={backOffNav} />
    </Nav>
  );
};

export default NavBar;
