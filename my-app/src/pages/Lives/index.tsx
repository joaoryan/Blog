import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';

//styles
import { Container } from '../../styles/GlobalStyles';
import * as Styled from './styled';
//icons
import { number } from 'prop-types';

export function Live(): JSX.Element {


  return (
    <Styled.Page>
    <Styled.Title>Lives</Styled.Title>
    <Styled.Text>
      
    </Styled.Text>
  </Styled.Page>
  );
}
