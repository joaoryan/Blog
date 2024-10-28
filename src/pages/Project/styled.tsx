import styled from 'styled-components';
import * as color from '../../styles/color';

export const Page = styled.div`
  padding: 102px;
  @media (max-width: 800px) {
    padding: 22px;
  }
`;

export const Card = styled.img`
  height: 300px;
  width: 100;
  background-color: #fff;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  a{
    color: #F231A5
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
