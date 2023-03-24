import { createGlobalStyle } from 'styled-components';
import Pretendard from 'assets/fonts/PretendardVariable.woff2'

const GlobalStyle = createGlobalStyle`    
    @font-face {
        font-family: 'Pretendard';
        src: local('Pretendard'), url(${Pretendard}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Pretendard', sans-serif;
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
        --select-option-bg-color-hover: #eaf2ff;
        --textbox-bg-color: #fff;
        --textbox-border-color: #878787;
        --textbox-border-color-focus: #e5e5e5;
        --textbox-shadow: #e5e5e5;
        --textbox-shadow-focus: #0049ed;
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
        --textbox-bg-color: #141414;
        --textbox-border-color: #111;
        --textbox-border-color-focus: #111;
        --textbox-shadow: #161616;
        --textbox-shadow-focus: #0041b7;
    }

    body {
        margin: 0;
        background: var(--main-bg-color);
        color: var(--main-text-color);
        transition: all 200ms ease;
    }
`;

export default GlobalStyle;