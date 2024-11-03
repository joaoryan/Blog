import styled from 'styled-components';
import * as color from '../../styles/color';

//geral

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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  width: 150px;
  border-radius: 3px;
  margin: 20px 10px;
  padding: 20px;
  clip-path: polygon(30% 0%, 79% 0, 100% 18%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0);
  background-color: #1c1e21;
  border: none;
  font-size: 18px;
  font-weight: 510;
  transition: 0.8s;
  cursor: pointer;

  svg{
    font-size: 60px;
  }
  :hover{
    transition: 0.5s;
    color: #f0a63b; // #f3b755; //#F27100
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0);
    height: 204px;
    width: 154px;
    transition: 0.8s;
    font-size: 20px;
  }

  @media (max-width: 800px) {
    height: 150px;
    width: 100px;
    font-size: 14px;
    svg{
      font-size: 40px;
    }
    :hover{
      font-size: 16px;
      height: 154px;
      width: 104px;
      transition: 0.5s;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 0px;
  overflow-y: none;

  & a{
    display: flex;
    justify-content: center;
    height: 250px;
    width: 200px;
  }
`;

export const Text = styled.div`
  color:#8899a6;
  text-decoration: none;
`;
export const TextColor = styled.div`
  color:#f0a63b; // #f3b755; //#F27100;
  text-decoration: none;
`;