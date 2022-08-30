import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { LinksList, ListItem, Icon } from './style';

import HomeIcon from '../../../assets/image/home.svg';
import CookbookIcon from '../../../assets/image/cookbook.svg';
import MenuIcon from '../../../assets/image/meus-menus.svg';
import EquipamentIcon from '../../../assets/image/equipamentos.svg';
import UserIcon from '../../../assets/image/usuarios.svg';
import AttendanceIcon from '../../../assets/image/atendimento.svg';
import { NavLink } from 'react-router-dom';

type LinksProps = {
  hidden: boolean;
};

const Links: FC<LinksProps> = (props) => {

	const checkActive = (match: any, location: any) => {
		//some additional logic to verify you are in the home URI
		if (!location) return false;
		const { pathname } = location;
		return (pathname === "/home")
	}

  return (
    <LinksList>
      <ListItem>
        <NavLink to='/home'>
          {!props.hidden && 'Home'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/profile' >
          {!props.hidden && 'Sobre Mim'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/serie'>
          {!props.hidden && 'Séries'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/project' >
          {!props.hidden && 'Projetos'}
        </NavLink>
      </ListItem>
    </LinksList>
  );
};

export default Links;