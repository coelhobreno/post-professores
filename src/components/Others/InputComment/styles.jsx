import styled from "styled-components";

import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.form`
    display: flex;

    gap: 10px;

    position: relative;
`

export const ImgUser = styled.img`
    width: 40px;
    height: 40px;
    
    border-radius: 50%;
`

export const Input = styled.input`
    color: var(--text-primary);

    width: 100%;

    font-size: 15px;

    outline: none;
    border: 1px solid var(--border-outline);
    border-radius: 15px;

    padding: 8px 20px;

    &::placeholder {
        color: var(--text-secondary);
    }

    opacity: .7;

    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`

export const ButtonComment = styled.button`
    width: 40px;

    padding: 9px;

    background-color: var(--quaternary);
    border: 1px solid var(--quaternary);
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    flex-grow: 1;

    &:hover {
        background-color: transparent;
    }
`

export const IconSend = styled(AiOutlineSend)`
    width: 100%;
    height: 100%;
`

export const BlockInput = styled.div`
    background-color: rgba(0, 0, 0, .8);
    height: 100%;
    width: 100%;

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    text-decoration: underline;

`

export const Login = styled(Link)`
    color: var(--primary);
    text-decoration: underline;
    opacity: .7;
    
    &:hover {
        opacity: 1;
    }
`