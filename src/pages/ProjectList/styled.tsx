import styled from 'styled-components';
import * as color from '../../styles/color';

export const Page = styled.div`
  padding: 102px;
  @media (max-width: 800px) {
    padding: 22px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
