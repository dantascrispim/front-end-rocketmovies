import styled from "styled-components";

export const Container = styled.div `
       
   width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
    
    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color:  ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom:  8px;
    border-radius: 6px;
    

    
    > input {
        height: 56px ;
        width: 100%;
        
        padding: 12px ;

        color: ${({ theme }) => theme.COLORS.LIMON};
        background: transparent;
        border: 0;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    }

    > svg {
        
        margin-left:  16px;
        
    }

`;

