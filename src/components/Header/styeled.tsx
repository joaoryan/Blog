import styled from 'styled-components';
import * as color from '../../styles/color';

export const Content = styled.div`
  display: flex;
  align-items: center;  
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  margin: 0px 40px;
  gap: 30px;
   @media (min-width: 800px) {
    display: none;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: yellow;
  font-size: 40px;
  margin-left: 30px;
`;

export const Pages = styled.div`
 // height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const page = styled.div`
  display: flex;
  flex-direction: right;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  & > a{
    width: 100%;
    color: #8899a6;;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }
  & > a:hover {
    transition: 0.5s;
    color: white
  }
  .active {
   color: #f0a63b // #f3b755; //#F27100
  }
  .active:hover {
    color: #f3b755; //#F27100
  }
`;