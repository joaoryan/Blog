import styled from 'styled-components';
import * as color from '../../styles/color';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 102px;
`;

export const Container = styled.div`
  max-width: 930px;
  overflow: auto;
`;


export const Title = styled.div`
  font-size: 30px;
  margin: 0px 0px 30px 0px;
`;

export const SubTitle = styled.div`
  font-size: 28px;
  margin: 30px 0px;
`;

export const Text = styled.div`
  font-size: 20px;
  margin: 20PX 0px;
  a{
    border-bottom: 1px dashed #b4421c;
    color: #b4421c;
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

  svg{
    font-size: 30px;
  }

  &:hover {
    color: #f15b29
  }
`;
