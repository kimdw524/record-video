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
        --topbar-item-bg-color: #fff;
        --select-bg-color: #fff;
        --select-shadow-inset: #e9e9e9;
        --select-shadow-hover: #668ddd33;
        --select-border-color: #747474;
        --select-option-border-color: #efefef;
        --select-option-bg-color-hover: #e7f0ff;
    }

    body.dark {
        --main-bg-color: #222830;
        --main-text-color: #fff;
        --button-text-color: #fff;
        --topbar-bg-color: #1e1e1e;
        --topbar-border-color: #000000cc;
        --topbar-item-bg-color: #141414;
        --select-bg-color: #161616;
        --select-shadow-inset: #343434;
        --select-shadow-hover: #d2d2d21a;
        --select-border-color: #101010;
        --select-option-border-color: #1e1e1e;
        --select-option-bg-color-hover: #2a2a2a;
    }

    body {
        margin: 0;
        background: var(--main-bg-color);
        color: var(--main-text-color);
        transition: all 200ms ease;
    }
`;

export default GlobalStyle;