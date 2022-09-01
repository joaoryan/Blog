import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
//import { Link } from 'react-router-dom';



import tdd from '../../assets/image/testTDD.png'
import * as Styled from './styled';
import { Container } from '../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

export function Home(): JSX.Element {

  return (
    <Styled.Page>
      <NavLink to='/testTDD' >
        <Styled.Card
          src={tdd}
          alt='Logo Prática'
        />
      </NavLink>
     
      
      
    </Styled.Page>
  );
}
