import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
//import { Link } from 'react-router-dom';



import tdd from '../../assets/image/testTDD.png'
import * as Styled from './styled';
import { Container } from '../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { Section } from '../Layout/styles';

export function Home(): JSX.Element {
  const [filteredMenu, setfilteredMenu] = useState<string>('');

  return (
    <Styled.Page> 
      <Styled.SearchInputDiv>
        <Styled.IconSearch>
          <BiSearchAlt />
        </Styled.IconSearch> 
        <Styled.Input name='busca' placeholder={'Buscar'}
          onChange={(e) => setfilteredMenu(e.target.value)} />
      </Styled.SearchInputDiv>
      <Styled.Cards>

        <NavLink to='/testTDD' >
          <Styled.Image
            src={tdd}
            alt='Logo Prática'
          />
        </NavLink>
      </Styled.Cards>
    </Styled.Page>
  );
}
