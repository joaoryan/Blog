import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import * as Styled from './styled';
import { Container } from '../../styles/GlobalStyles';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaLinux } from "react-icons/fa";

export function ArticleCard(): JSX.Element {
  const navigate = useNavigate();

  return (
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
  );
}
