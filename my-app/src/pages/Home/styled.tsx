import styled from 'styled-components';
import * as color from '../../styles/color';

//geral
export const Page = styled.div`
  height: 100%;
  width: 100%;
  padding: 62px;
`;

export const Card = styled.img`
  height: 270px;
  width: 220px;
  background-color: #fff;
  border-top-left-radius: 25px;
  transition: 0.5s;
  :hover{
    border-top-left-radius: 0px;
    transition: 0.5s;
    height: 280px;
    width: 230px;
  }
`;

