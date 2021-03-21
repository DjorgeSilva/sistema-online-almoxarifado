import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: ${props=>props.theme.font_padrao};
        box-sizing: border-box;
    } 

    body{
        background: #000;
    }
`;