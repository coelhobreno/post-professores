import styled from "styled-components";

import { Link } from "react-router-dom";

import { IoWarningOutline } from "react-icons/io5";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const IconWarning = styled(IoWarningOutline)`
    width: 50px;
    height: 50px;

    color: var(--primary);
`

export const Title = styled.h1`
    margin-top: 15px;

    font-size: 20px;

    text-decoration: underline;
`

export const Description = styled.p`
    color: var(--text-secondary);
    margin-top: 5px;
`

export const Redirect = styled(Link)`
    color: var(--quaternary);
    font-size: 15px;
    font-weight: bold;

    display: flex;
    align-items: center;

    background-color: var(--primary);

    margin-top: 10px;
    padding: 8px 22px;

    border-radius: 40px;

    transition: .2s scale;

    text-transform: uppercase;
    
    &:hover {
        scale: 1.05;
        text-decoration: underline;
    }    
`