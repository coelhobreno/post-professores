import styled from "styled-components"

import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 90%;
    max-width: 800px;

    display: flex;
    flex-direction: column;

    margin: 0 auto;

    padding: 50px 0 0;

    > a {
        width: fit-content;
        font-weight: 600;

        color: var(--text-button);
        background-color: var(--primary);
        border: 1px solid var(--primary);
        
        border-radius: 20px;
        padding: 10px 20px;

        margin-top: 10px;

        transition: background-color .2s, color .2s;

        &:hover {
            background-color: transparent;
            color: var(--primary);
        }
    }
`

export const Header = styled.h2`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    letter-spacing: -.5px;
`

export const Title = styled.h1`
    font-size: 40px;
    line-height: 40px;

    @media (max-width: 500px){
        font-size: 30px;
        line-height: 30px;
    }
`

export const Description = styled.p`
    font-size: 16px;

    margin-top: 10px;

    line-height: 20px;
    color: var(--text-tertiary);
`

export const RedirectLogin = styled(Link)``

export const RedirectCreate = styled(Link)``