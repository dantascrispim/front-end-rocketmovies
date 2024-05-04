import styled from "styled-components";

export const Container = styled.button `
background: none ;
color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.LIMON : theme.COLORS.GRAY_100};
margin-top: 40px;
border: none;
font-size: 16px;
 cursor: pointer;

`