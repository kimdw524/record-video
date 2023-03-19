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

    html {
        font-size: 14px;
    }
    
    body.light {
        --main-bg-color: #fff;
        --main-text-color: #000;
        --button-text-color: #000;
        --topbar-bg-color: #fff;
    }

    body.dark {
        --main-bg-color: #222830;
        --main-text-color: #fff;
        --button-text-color: #fff;
        --topbar-bg-color: #1e1e1e;
    }

    body {
        margin: 0;
        background: var(--main-bg-color);
        color: var(--main-text-color);
    }
`;

export default GlobalStyle;