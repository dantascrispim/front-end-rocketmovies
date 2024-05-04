
import styled from "styled-components";


export const Container = styled.section `
  
    padding: 95px;
    
    
    
    > h2 {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
        

    }
`;


