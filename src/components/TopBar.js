import styled from 'styled-components';

const TopBar = {
    Bar: (props) => {
        return (
            <Wrap>{props.children}</Wrap>
        )
    },
    Logo: (props) => {
        return (
            <Logo {...props} />
        )
    },
    Item: (props) => {
        return (
            <Item data-text={props.tooltip} {...props}>{props.children}</Item>
        )
    }
}

export default TopBar;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
    height: 4rem;
    padding: 0 1.5rem;
    background-color: var(--topbar-bg-color);
    box-shadow: 0 0 10px 0 var(--topbar-border-color);
`;

const Logo = styled.div`
    position: absolute;
    left: 12px;
    font-size: 1.25rem;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0 1.5rem;
    background-color: var(--topbar-item-bg-color);
    color: var(--main-text-color);
    cursor: pointer;
    transition: all 200ms ease;
    z-index: 1;
    
    ::before {
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: all 200ms ease;
        content: '';
    }

    ::after {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2.5rem;
        opacity: 0;
        height: 2.5rem;
        background-color: var(--topbar-item-bg-color);
        font-size: 0.9rem;
        transition: all 200ms ease;
        transform: scaleY(0);
        transform-origin: 50% 0;
        content: attr(data-text);
    }
    
    :hover {
        ::before {
            bottom: -2.5rem;
            opacity: 1;
        }
        ::after {
            opacity: 1;
            transform: scaleY(1);
        }
        z-index: 2;
    }

    :active {
        transform: scale(1.05);
    }
`