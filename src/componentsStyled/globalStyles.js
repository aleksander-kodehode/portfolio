import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0; 
        font-family: sans-serif;
        /* #TODO: Fix font family */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${(props) => props.theme.darkTheme.dark};
        color: ${(props) => props.theme.darkTheme.lightGrey};
    }
    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.darkTheme.white}
    }
    .nav-bar-link-active {
        color: #7f5af0 !important;
    }
    
`;

export default GlobalStyle;
