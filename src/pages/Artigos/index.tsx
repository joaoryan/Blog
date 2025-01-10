import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import * as Styled from './styled';

import { NavLink, useNavigate } from 'react-router-dom';
import { FaLinux } from "react-icons/fa";

export function Artigos(): JSX.Element {
  const [filteredMenu, setfilteredMenu] = useState<string>('');
  const navigate = useNavigate();

  return (
    <Styled.Page>
      <Styled.Cards>
        <Styled.Card onClick={() => navigate(`/distroLinux`)}>
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
