
import styled from "styled-components";

export const Container = styled.div `
    main {
        overflow-y: auto;
         
    }
  
    div {
        display: flex;
        
        justify-content: center;
        flex-direction: column;

        background : ${({ theme}) => theme.COLORS.BACKGROUND_500};
        
        
        padding: 30px 30px;
        margin: 15px 110px;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    h3 {
        color:  ${({ theme }) => theme.COLORS.WHITE};
        font-size:24px;
        margin-bottom: 35px;
    }
    span {
        
        display: flex;
        gap: 10px;
        
    }
    
    
`;

