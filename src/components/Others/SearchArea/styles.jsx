import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const InputArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    border-radius: 20px;

    padding: 2px 10px;

    border: 1px solid var(--border-outline);
    
    margin-right: 5px;
    min-width: 310px;

    @media (max-width: 500px) {
        min-width: 100px;
    }
`

export const IconSearch = styled(AiOutlineSearch)`
    width: 25px;
    height: 25px;
`

export const Input = styled.input`
    flex: auto;

    border-radius: 0 5px 5px 0;

    width: 100%;
`

export const Button = styled.button`
    padding: 0 20px;

    border-radius: 20px;

    background-color: var(--quaternary);

    border: 1px solid var(--quaternary);

    &:hover {
        background-color: transparent;
    }

    @media (max-width: 500px) {
        
    }

`

export const IconGlass = styled(FaMagnifyingGlass)``