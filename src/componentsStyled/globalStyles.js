import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";
import "@fontsource/inter/700.css";
const GlobalStyle = createGlobalStyle`
    /* FIXME: Remove scrollbars when everything is done */
  /*   *{
        -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
        display: none;
    } */
    *{
        box-sizing: border-box;
    }
    body {
        /* FIXME: remove when bug for x overflow is found */
        overflow-x:hidden;
        margin: 0;
        padding: 0; 
        font-family: "Inter", sans-serif;
        /* #TODO: Fix font family */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${(props) => props.theme.mainBackground};
        color: ${(props) => props.theme.paragraph};
        transition: background 0.25s linear;

    }
    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.heading};
        transition: all 0.25s linear;

    }
    .nav-bar-link-active {
        color: ${(props) => props.theme.purple} !important;
    }
    
`;

export default GlobalStyle;
