import styled from "styled-components";

import { FaRegLightbulb } from "react-icons/fa6";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 20px;

    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, .7) 0 -1px 5px 0;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;

    height: 40px;
    width: 40px;

    cursor: pointer;
`

export const IconLogo = styled(FaRegLightbulb)`
    color: var(--primary);
`

export const List = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Button = styled.button`
    padding: 6px 18px;

    border-radius: 20px;

    background-color: var(--quaternary);

    border: 1px solid var(--quaternary);

    &:hover {
        background-color: transparent;
    }
`