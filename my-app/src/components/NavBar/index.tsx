import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Nav, LeftArrow, Image, ButtonHidden, Text, Title } from './styles';

const NavBar = () => {
  const [backOffNav, setbackOffNav] = useState(false);
  const slideHandler = () => {
    setbackOffNav((prevState) => !prevState);
  };
  return (
    <Nav className={`${backOffNav ? 'back-off' : ''}`}>
      <Title>{"João Ryan"}</Title>
      <Text>{"Aqui devo escrever uma breve introdução"}</Text>
      <NavLinks hidden={backOffNav} />
      <ButtonHidden onClick={slideHandler} className='button-hidden'>
        <LeftArrow className={`${backOffNav ? 'right' : 'left'}`} />
      </ButtonHidden>
    </Nav>
  );
};

export default NavBar;
