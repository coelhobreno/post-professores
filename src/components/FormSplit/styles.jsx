import styled from "styled-components";

export const FirstTitle = styled.h1`
    text-transform: none;
    position: relative;

    &::after {
        content: "";
        width: 40%;
        height: 4px;
        background-color: var(--primary);
        position: absolute;
        bottom: 0;
        left: 0;
    }
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;

    font-weight: 600;

    margin-top: 20px;
`

export const Title = styled.span`
    color: var(--primary);
    font-weight: bold;
    text-decoration: underline;
`

export const Input = styled.input`
    color: var(--text-primary);
    font-size: 15px;

    border: none;
    border-bottom: 1px solid var(--border-grey);
    padding: 8px 4px;

    width: 100%;

    &::placeholder {
        color: var(--text-tertiary);
    }
`

export const TextArea = styled.textarea`
    color: var(--text-primary);
    font-size: 15px;
    font-weight: 500;

    min-height: 120px;

    background-color: transparent;

    padding: 8px 4px;

    border: none;
    border-bottom: 1px solid var(--border-grey);

    resize: vertical;

    &::placeholder {
        color: var(--text-tertiary);
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--tertiary);
    }
    
`

export const Button = styled.button`
    min-width: 130px;
    min-height: 40px;

    color: var(--text-button);
    font-weight: 600;
    
    background-color: var(--primary);
    border: 1px solid var(--primary);

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    &:hover {
        background-color: transparent;
        color: var(--primary);
    }
`