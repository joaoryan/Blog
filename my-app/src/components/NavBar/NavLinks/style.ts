import styled from 'styled-components';

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
   &:hover {
    color: ${props => props.theme.colors.navbarHoverItem}
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
    color: ${props => props.theme.colors.navbarHoverItem}
  }

  .active {
    color: ${props => props.theme.colors.navbarHoverItem}
  }

`;

export const Icon = styled.img`
  width: 30px;
  height: auto;
`;