import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: auto;
    }
    
   .tags {
    
    display: flex;
    justify-content: left;
    gap: 40px;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px  16px;
    width: 100%;
    height: auto;
    
    
   }
`;

export const Form = styled.form`
    width: 100%;  
    padding: 0 123px;

    .movie {
        display: flex;
        gap: 40px;
        margin-top: 40px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    
    
    a {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin: 40px 0 40px;
        color: ${({ theme}) => theme.COLORS.LIMON};
    }

    h1 {
        color:  ${({ theme}) => theme.COLORS.WHITE};
        font-size: 36px;
    }
    
    .butt {
        display: flex;
        gap: 40px;

        background: ${({ theme, isNew }) => isNew ? "BLACK" : theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    }



`;

