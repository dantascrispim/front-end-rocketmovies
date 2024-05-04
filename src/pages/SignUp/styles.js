import styled from "styled-components";
import backgrounImg from "../../assets/background.png";

export const Container = styled.div `
    height: 100vh;

    display: flex;

    align-items: stretch;
     h1 {
        color: ${({ theme}) => theme.COLORS.LIMON};
        font-size: 43px;
    }
    
     h2 {
        color: ${({ theme}) => theme.COLORS.WHITE};
        font-size: 24px;
        margin: 48px 0;
       
        
        
    }

    p {
        font-size: 16px;
        color: ${({ theme}) => theme.COLORS.GRAY_100};
    }

    a {
        text-decoration: none;
        color: ${({ theme}) => theme.COLORS.WHITE};
        margin-top: 60px;
        align-items: center;
        font-size: 16px;
        
        display: flex;
        gap: 10px;
    }
`;

export const Form = styled.form `
    padding: 0 136px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    text-align: center;
   
`;

export const Background = styled.div `
    flex: 1;
    background: url(${backgrounImg}) no-repeat center center;
    background-size: cover;
`;