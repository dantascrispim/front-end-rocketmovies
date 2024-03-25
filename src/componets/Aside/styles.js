import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div `
`;


export const Navbar = styled.div `
    div {
        display: flex;
        justify-content: space-between;
    }

    h2 {
       margin-top: 50px;
       margin-left: 110px;
       color: ${({ theme })=> theme.COLORS.WHITE};
       font-weight: 400;
    }

    button {
        
        width: 207px;
        height: 48px;
        border: none;
        border-radius: 5px;
        margin-top: 47px;
        margin-right: 109px;
    }
    
`;

export const Add = styled(Link) `
    background-color: ${({ theme}) => theme.COLORS.LIMON};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 5px;
    margin: 45px 110px;
    height: 48px;
    padding: 13px;

    cursor: pointer;

    > svg {
        margin-right: 8px;
    }
`;


