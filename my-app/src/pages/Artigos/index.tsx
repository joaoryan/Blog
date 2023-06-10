import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
//import { Link } from 'react-router-dom';



import tdd from '../../assets/image/testTDD.jpg'
import * as Styled from './styled';
import { Container } from '../../styles/GlobalStyles';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaLinux } from "react-icons/fa";
import { Section } from '../Layout/styles';


export function Artigos(): JSX.Element {
  const [filteredMenu, setfilteredMenu] = useState<string>('');
  const navigate = useNavigate();

  return (
    <Styled.Page>
      <Styled.Cards>
        <Styled.Card onClick={() => navigate(`/testTDD`)}>
          <div>
            <Styled.Text>
              Distribuições
            </Styled.Text>
            <Styled.TextColor>
              Linux
            </Styled.TextColor>
          </div>
          <div>
            <FaLinux />
          </div>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Page>
  );
}
