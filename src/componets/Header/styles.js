import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled. div `
    grid-area: header;

    height: 105px;
    width: 100%;
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 

    display: flex;
    justify-content: space-between;
    align-items: center; 

    padding: 0 120px;

    h2 {
        color: ${({ theme}) => theme.COLORS.LIMON};
        font-size: 24px;
    
    }

    
  
    
`;

export const Profile = styled(Link) `
    display: flex;
    align-items: center;
     

    > img {
        width: 56px;
        height:  56px;
        border-radius: 50%;
        
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        cursor: pointer;
    }

     span {
        font-size: 14px;
        color: ${({ theme}) => theme.COLORS.GRAY_100};
        text-align: right;
       
       
     }

     strong {
        font-size: 18px;
        color: ${({ theme}) => theme.COLORS.WHITE};
     }

`;

export const Place = styled.div `
    width: 50%;
    height: 56px;
    background:  ${({ theme}) => theme.COLORS.BACKGROUND_500};
    border-radius: 5px;
    color: ${({ theme }) => theme.WHITE};

    input {
        color: ${({ theme}) => theme.COLORS.WHITE};
    }
`;