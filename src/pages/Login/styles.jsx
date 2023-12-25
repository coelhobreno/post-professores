import styled from "styled-components"

import { Link } from "react-router-dom"

export const FormDefault = styled.div`
    width: 90%;
    margin: 0 auto;

    max-width: 800px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Register  = styled(Link)`
    color: var(--text-button);
    font-weight: 600;
    
    background-color: var(--primary);
    border: 1px solid var(--primary);

    border-radius: 15px;

    padding: 8px 20px;

    &:hover {
        background-color: transparent;
        color: var(--primary);
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > button {
        padding: 8px 20px;
        border-radius: 15px;
        width: fit-content;
    }
`