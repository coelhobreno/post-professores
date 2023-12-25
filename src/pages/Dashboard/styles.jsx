import styled from "styled-components"

import { Link } from "react-router-dom"

import { IoMdEye } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const Container = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
`

export const Info = styled.p`
    color: var(--text-tertiary);
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border-bottom: 2px solid var(--border-grey);

    margin-top: 10px;
`

export const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-separate);
`

export const TitleItem = styled.div``

export const Actions = styled.div`
    display: flex;

    > a, button {
        width: 32px;
        height: 32px;

        padding: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid var(--quaternary);
        background-color: var(--quaternary);

        margin-left: 5px;
        border-radius: 50%;

        &:hover {
            background-color: transparent;
        }

        > svg {
            color: var(--white);
            width: 100%;
            height: 100%;
        }
    }
`

export const View = styled(Link)``

export const IconView = styled(IoMdEye)``

export const Edit = styled(Link)``

export const IconEdit = styled(IoPencilSharp)``

export const ButtonDelete = styled.button``

export const IconRemove = styled(IoMdClose)``