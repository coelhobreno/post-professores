import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
    text-transform: uppercase;
    position: relative;

    &.active {
        color: var(--primary);
    }

    &::after{
        width: 0%;
        position: absolute;
    }

    //Effects
    &:hover::after{
        width: 100%;
    }

    &:hover::after, &::after, &.active::after{
        content: '';
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary);
        transition: ease-in .2s;
    }

    &.active::after{
        width: 100%;
    }

    &.button {
        color: var(--text-primary);

        padding: 5px 15px;
        border-radius: 15px;

        background-color: var(--quaternary);
        border: 1px solid var(--quaternary);

        &:hover {
            background-color: transparent;
        }

        &::after {
            display: none;
        }
    }
`