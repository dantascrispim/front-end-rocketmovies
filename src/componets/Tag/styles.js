import styled from "styled-components";

export const Container = styled.span `
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    font-size: 12px;
    padding: 7px 14px; 
    border-radius: 5px;
    margin-right: 6px;
    color:  ${({ theme }) => theme.COLORS.CZ};
    background-color: ${({ theme }) => theme.COLORS.LIMON};
    text-align: center;
    width: 130px;
    height: 30px;
    justify-content: center;
    cursor: pointer;

   

`;