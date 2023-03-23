import styled from 'styled-components';

const TextBox = (props) => {
    return (
        <Input type="text" {...props} />
    )
}

export default TextBox;

const Input = styled.input`
    display: flex;
    align-items: center;
    position: relative;
    height: 3.25rem;
    padding: 0 0.75rem;
    background-color: var(--textbox-bg-color);
    box-shadow: var(--textbox-shadow) 0 0 3px 1px;
    border: 1px solid var(--textbox-border-color);
    border-radius: 0.0rem;
    color: var(--main-text-color);
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 200ms ease;

    :focus {
        box-shadow: var(--textbox-shadow-focus) 0 0 1px 1px;
        border: 1px solid var(--textbox-border-color-focus);
    }
`;
