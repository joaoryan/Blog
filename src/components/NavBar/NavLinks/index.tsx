import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './styled';

type LinksProps = {
  hidden: boolean;
};

const Links: FC<LinksProps> = () => {
  return (
    <Styled.LinksList>
      <Styled.ListItem>
        <NavLink to='/'>
          {'Artigos'}
        </NavLink>
      </Styled.ListItem>
      <Styled.ListItem>
        <NavLink to='/projectList'>
          {'Projetos'}
        </NavLink>
      </Styled.ListItem>
      <Styled.ListItem>
        <NavLink to='/profile' >
          {'Sobre Mim'}
        </NavLink>
      </Styled.ListItem>
    </Styled.LinksList>
  );
};

export default Links;
