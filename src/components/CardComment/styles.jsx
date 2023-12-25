import styled from "styled-components";

import { VscTrash } from "react-icons/vsc";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 20px 0;

    &:not(:last-child){
        border-bottom: 1px solid var(--border-separate);
    }

    overflow: hidden;
`

export const InfoUser = styled.div`
    display: flex;
    align-items: start;

    gap: 10px;
`

export const Description = styled.div`
    > h3 {
        font-size: 16px;
        font-weight: 400;
    }

    > p {
        color: var(--text-tertiary);
        font-size: 15px;
    }
`

export const Image = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 50%;
`

export const IconRemove = styled(VscTrash)`
    width: 32px;
    height: 32px;

    background-color: var(--quaternary);
    border: 1px solid var(--quaternary);

    padding: 7px;

    border-radius: 50%;

    flex-shrink: 0;
    cursor: pointer;

    transition: background-color .2s ;

    &:hover {
        background-color: transparent;
    }
`