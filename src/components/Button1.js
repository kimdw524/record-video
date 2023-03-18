import styled from 'styled-components';

const Button1 = (props) => {
    return (
        props.icon ?
        <Button {...props}><Icon>{props.icon}</Icon>{props.children}</Button>
        : <Button {...props} />
    )
}

export default Button1;

const Button = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    height: 4rem;
    padding: 0 1.5rem;
    background-color: transparent;
    box-shadow: #2e83ff 0 0 0 1px inset;
    border: 0;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 200ms ease;
    
    ::before {
        position: absolute;
        top: 0; left: 0;
        bottom: 0; right: 0;
        background-color: transparent;
        transition: all 100ms ease;
        content: '';
    }

    :hover {
        box-shadow: #fff 0 0 0 2px inset;
    }

    :active {
        :before {
            background-color: rgb(0, 0, 0, 0.3);
        }
    }
`;

const Icon = styled.div`
    display: inline-block;
    margin-right: 0.5rem;
`