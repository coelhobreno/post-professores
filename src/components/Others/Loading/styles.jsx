import styled from "styled-components";

import rotateAnimation from "../../../utils/loadingAnimation";

import { AiOutlineLoading } from "react-icons/ai";

export const Container = styled.div`
    width: 100%;
    height: 25px;

    margin-top: 25px;
`

export const Load = styled(AiOutlineLoading)`
    width: 100%;
    height: 25px;

    animation: ${rotateAnimation} .5s infinite ease-in-out;
`