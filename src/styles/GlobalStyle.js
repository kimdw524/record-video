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
    
    body {
        --main-bg-color: #fff;
        --main-text-color: #000;
        --button-text-color: #000;
        --topbar-bg-color: #fff;
        --topbar-border-color: #00000033;
        --topbar-item-bg-color: #f3f3f3;
    }

    body.dark {
        --main-bg-color: #222830;
        --main-text-color: #fff;
        --button-text-color: #fff;
        --topbar-bg-color: #1e1e1e;
        --topbar-border-color: #000000cc;
        --topbar-item-bg-color: #141414;
    }

    body {
        margin: 0;
        background: var(--main-bg-color);
        color: var(--main-text-color);
        transition: all 200ms ease;
    }
`;

export default GlobalStyle;