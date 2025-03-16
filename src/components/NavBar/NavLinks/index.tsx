import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styled';
import { useTheme } from '../../../theme-context';

type LinksProps = {
  hidden: boolean;
};

const Links: FC<LinksProps> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Styled.LinksList>
      <Styled.ListItem>
        <NavLink to='/'>
          <div>{'Artigos'}</div>
          {'Artigos'}
        </NavLink>
      </Styled.ListItem>
      <Styled.ListItem>
        <NavLink to='/projectList'>
          <div>{'Projetos'}</div>
          {'Projetos'}
        </NavLink>
      </Styled.ListItem>
      <Styled.ListItem>
        <NavLink to='/profile' >
          <div>{'Sobre Mim'}</div>
          {'Sobre Mim'}
        </NavLink>
      </Styled.ListItem>
    </Styled.LinksList>
  );
};

export default Links;
