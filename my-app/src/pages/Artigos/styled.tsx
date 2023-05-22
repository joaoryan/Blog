import styled from 'styled-components';
import * as color from '../../styles/color';

//geral
export const Page = styled.div`
  height: 100%;
  //width: 100vw;
  padding: 102px;
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
  border: 1px solid #f15b29;
  border-radius: 5px;
  background: #0e0e0e;
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
  height: 250px;
  width: 200px;
  border-radius: 3px;
  transition: 0.5s;
  margin: 20px 10px;
  clip-path: polygon(30% 0%, 79% 0, 100% 18%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0);
 
  :hover{
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0);
    height: 254px;
    width: 204px;
    transition: 0.5s;
  }
`;

export const Cards = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: auto auto auto auto auto;
  padding: 20px 0px;
  height: 85%;
  overflow-y: auto;
  & a{
    display: flex;
    justify-content: center;
    height: 250px;
    width: 200px;
  }
`;