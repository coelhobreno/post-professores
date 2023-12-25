import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;

    height: fit-content;

    background-color: var(--tertiary);

    padding: 30px 50px;
`

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
`

export const Description = styled.p`
    color: var(--text-tertiary);
    font-size: 15px;

    text-align: center;

    margin-top: 5px;
`

export const ListSocialNetworks = styled.ul`
    display: flex;
    gap: 5px;

    margin-top: 20px;
`

export const Redirect = styled.a`
    

    width: 35px;
    height: 35px;

    background-color: var(--quaternary);
    border: 1px solid var(--border-outline);

    border-radius: 50%;
    padding: 6px;

    > svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        background-color: transparent;
    }
`