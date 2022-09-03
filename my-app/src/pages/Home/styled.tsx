import styled from 'styled-components';
import * as color from '../../styles/color';

//geral
export const Page = styled.div`
  height: 100%;
  //width: 100vw;
  padding: 62px;
`;

export const SearchInputDiv = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
`;

export const IconSearch = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  svg{
    font-size: 20px;
    margin-left: 10px;
  }
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.outlineActiveButton};
  border-radius: 5px;
  background: #030518;
  color: #8899a6;
  letter-spacing: 1px;
  padding: 0px 40px;
  height: 40px;
  font-size: 12px; 
  width: 100%;   
  outline: none;
  font-weight: bold;
  :hover {
    font-style: italic;
  }
`;

export const Image = styled.img`
  height: 270px;
  width: 220px;
  border-top-left-radius: 25px;
  transition: 0.5s;
  margin: 10px;
  :hover{
    border-top-left-radius: 0px;
    transition: 0.5s;
    height: 275px;
    width: 225px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top:20px;
  height: 35rem;
  overflow-y: scroll;
  a{
    display: flex;
    justify-content: center;
  }
`;