import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: flex-end;
  justify-content: space-around;
  width: 100vw;
  width: 100dvw;
  height: 50px;
  gap: 20px;
/*   background-color: rgba(0, 0, 0, 0.2); 
  backdrop-filter: blur(10px);
  position: fixed;  */
  div{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
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
    @media (max-width: 440px) {
      font-size: 14px;
    }
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

export const ImageLogo = styled.img`
  width: 25px;
  object-fit: cover;
  opacity:1;
`;