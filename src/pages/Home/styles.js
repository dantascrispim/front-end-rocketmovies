import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height:  100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    " div"
    "div"
    "menu"
    
   ;


`;

export const Place = styled.div `
    
    width: 100%;
    height: 56px;
    background:  ${({ theme}) => theme.COLORS.BACKGROUND_500};
    border-radius: 5px;
    color: ${({ theme }) => theme.WHITE};

    input {
        color: ${({ theme}) => theme.COLORS.WHITE};
    }

`;
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  

  padding: 64px;
  text-align: center;

  > li {
    margin-bottom:24px;
    list-style: none;
  }

  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  
`
