import styled from "styled-components";

export const Container = styled.section `
  margin: 28px 0;
  
  div {
     background: ${({ theme}) => theme.COLORS.BACKGROUND_800};
     border-radius: 10px;
     
     
     display: flex;
     justify-content: center;
     align-items: center;
  }

 > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
}
`; 