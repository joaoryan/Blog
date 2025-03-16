import styled, { keyframes } from 'styled-components';

const noise = keyframes` 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } `;

export const LinksList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const glitch = keyframes`
   0% {
    transform: translate(0);
    opacity: 1;
  }
  20% {
    transform: translate(-2px, 2px);
    opacity: 0.8;
  }
  40% {
    transform: translate(2px, -2px);
    opacity: 0.6;
  }
  60% {
    transform: translate(-1px, 1px);
    opacity: 0.4;
  }
  80% {
    transform: translate(1px, -1px);
    opacity: 0.2;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  } 
`;

export const ListItem = styled.li`
   &:hover {
    color: ${({ theme }) => theme.colors.textHighlighted}; //#F231A5
   }
  & > a {
    border: 1px solid transparent;
    color: #8899a6;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    height: 70px;
  }

  & > a:hover {
    transition: 0.5s;
    color: hsl(0, 0%, 100%);

  }


  .active {
   color: ${({ theme }) => theme.colors.textHighlighted} // #f3b755; //#F27100
  }

  .active:hover {
    color: ${({ theme }) => theme.colors.textHighlighted}; //#F27100
  }

  div{
    position: absolute;
    
  }
  div:hover{
    position: absolute;
    animation: ${glitch} 1s linear;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: auto;
`;

