import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,600;1,300;1,600&display=swap');
    
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        user-select: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
    
    body {
        margin: 0;
        background: #0d1117;
        color: #fff;
    }
`;

export default GlobalStyle;