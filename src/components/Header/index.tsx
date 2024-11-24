import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import * as Styled from './styeled';

export function Header(): JSX.Element {
  return (
    <Styled.Content>
      <div>
        <Styled.ImageLogo key={logo} src={logo} alt={`Imagem ${logo}`} />
      </div>
      <div>
        <Styled.page>
          <NavLink to="/">
            Artigos
          </NavLink>
        </Styled.page>
        <Styled.page>
          <NavLink to="/projectList">
            Projetos
          </NavLink>
        </Styled.page>
        <Styled.page>
          <NavLink to="/profile">
            Sobre Mim
          </NavLink>
        </Styled.page>
      </div>
    </Styled.Content>
  );
}
