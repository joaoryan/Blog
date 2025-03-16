import React, { useState } from 'react';

import NavLinks from './NavLinks';

import * as Styled from './styled';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import img from '../../assets/image/joao-ryan.png'

import { useTheme } from '../../theme-context';

const NavBar = () => {
  const [backOffNav, setbackOffNav] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const Footer = () => (
    <Styled.Footer>
      <Styled.FooterText>© 2025 João Ryan dos Santos.</Styled.FooterText>
    </Styled.Footer>
  );

  return (
    <>
      <Styled.Nav>
        <Styled.Mode>
          <h1 onClick={toggleTheme}>
            {theme === "light" ? <><MdOutlineLightMode /> Light</> : <><MdOutlineDarkMode /> Dark</>}
          </h1>
        </Styled.Mode>
        <Styled.Img>
          <img src={img} />
          <Styled.Title>{"João Ryan"}</Styled.Title>
          <Styled.Text>{"Graduando engenharia de software, desenvolvedor fullstack"}</Styled.Text>
        </Styled.Img>

        <Styled.DivIcon>
          <Styled.Icon>
            <a href="https://github.com/joaoryan" target="_blank"><AiFillGithub /></a>
          </Styled.Icon>
          <Styled.Icon>
            <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank"><AiFillLinkedin /></a>
          </Styled.Icon>
        </Styled.DivIcon>
        <NavLinks hidden={backOffNav} />
        <Footer />
      </Styled.Nav >
    </>

  );
};


export default NavBar;
