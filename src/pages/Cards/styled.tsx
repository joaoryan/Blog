import styled from 'styled-components';
import * as color from '../../styles/color';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 102px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    padding: 10px 26px;
  }
`;

export const Container = styled.div`
  max-width: 930px;
  overflow: auto;
`;

export const BackPage = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s;
  @media (max-width: 500px) {
    font-size: 18px;
    svg{
      font-size: 16px;
    }
  }
  :hover{
    transition: 0.5s;
    color: #f0a63b; // #f3b755; //#F27100
  }
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 0px 0px 30px 0px;
  color: #f0a63b; // #f3b755; //#F27100
  @media (max-width: 500px) {
    font-size: 24px;
    margin: 0px 0px 20px 0px;
  }
`;

export const SubTitle = styled.div`
  font-size: 28px;
  margin: 30px 0px;
  transition: 0.5s;
  @media (max-width: 500px) {
    font-size: 22px;
  }
  :hover{
    transition: 0.5s;
    color: #f0a63b; // #f3b755; //#F27100
  }
`;

export const Text = styled.div`
  font-size: 20px;
  margin: 20PX 0px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
  a{
    border-bottom: 1px dashed #f0a63b; // #f3b755; //#F27100
    color: #f0a63b; // #f3b755; //#F27100
    text-decoration: none;
  }
`;

export const DivIcon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 60px;
`;

export const Icon = styled.div`
  cursor: pointer;
  a{
    color: #8899a6;
    &:hover {
    color: #f0a63b; // #f3b755; //#F27100
    }
  }
  svg{
    font-size: 30px;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 60px;
`;

export const ListItem = styled.div`
  font-size: 20px;
  margin: 20PX 0px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
  a{
    border-bottom: 1px dashed #f0a63b; // #f3b755; //#F27100
    color: #f0a63b; // #f3b755; //#F27100
    text-decoration: none;
  }
`;
