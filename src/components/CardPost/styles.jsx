import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    padding: 25px;

    background-color: var(--tertiary);

    border: 1px solid var(--border-outline);
`

export const Title = styled.h2`
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 30px;
`

export const Description = styled.p`
    font-weight: 400;
    color: var(--text-tertiary);
    line-height: 22px;
    margin-top: 10px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;

    margin-top: 10px;
`

export const ShowPost = styled(Link)`
    padding: 10px 30px;

    border-radius: 20px;

    background-color: var(--quaternary);

    border: 1px solid var(--quaternary);

    &:hover {
        background-color: transparent;
    }
`

export const InfoPost = styled.div`
    width: 100%;

    font-size: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 20px;
`

export const UserImage = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 50%;
`

export const Author = styled.h3`
    font-weight: 200;
    font-style: italic;
    border-bottom: 1px solid var(--border-grey);
`

export const TagsArea = styled.div`
    margin-top: 20px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > p {
        > span {
            color: var(--text-primary);
            font-weight: bold;
        }

        margin-right: 8px;
        color: var(--text-tertiary);
        font-size: 14px;
    }
`