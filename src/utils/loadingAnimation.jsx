import {  keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear; /* Começa rápido */
  }
  100% {
    transform: rotate(360deg); /* Volta a acelerar */
    animation-timing-function: linear;
  }
`;

export default rotateAnimation;