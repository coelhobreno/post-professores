import styled from "styled-components"

import { IoMdAdd, IoMdRemove  } from "react-icons/io";


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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const AddOrRemoveArea = styled.div`
    height: 40px;
    width: 100%;

    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    > svg {
        width: 30px;
        height: 30px;
        background-color: var(--quaternary);

        border: 2px solid var(--quaternary);

        padding: 5px;

        border-radius: 50%;

        cursor: pointer;

        transition: background-color .2s;

        &:hover {
            background-color: transparent;
        }
    }
`

export const IconAdd = styled(IoMdAdd)``

export const IconRemove = styled(IoMdRemove)``