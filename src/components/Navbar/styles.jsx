import styled from "styled-components";

import { FaRegLightbulb } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

 export const Container = styled.nav`
     //Not Responsive
     display: flex;
     align-items: center;
     justify-content: space-between;

     padding: 12px 20px;

     box-shadow: rgba(0, 0, 0, .7) 0 -1px 5px 0;

     position: relative;

     //Responsiveness
     @media (max-width: 500px){
         flex-direction: column;
         justify-content: flex-start;
         align-items: center;
         gap: 10px;

         z-index: 1;

         background-color: var(--secondary);

         width: 65%;

         top: 0;
         bottom: 0;
         left: -65%;

         position: fixed;

         transition: transform ease-in-out .5s;

         &.showMenu {
             transform: translateX(100%);
             z-index: 1;
         }
     }
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
      //Not Responsiveness
      display: flex;
      align-items: center;
      gap: 15px;

      //Responsiveness
      @media (max-width: 500px){
          flex-direction: column;

          gap: 10px;
      }
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

  export const IconMenu = styled(IoMdMenu)`
      width: 30px;
      height: 30px;

      display: none;
      position: absolute;

      z-index: 1;

      right: -35px;

      background-color: var(--tertiary);

      color: var(--white);
      border: 2px solid var(--white);
      padding: 5px;

      border-radius: 5px;

      cursor: pointer;

      @media (max-width: 500px){
          display: block;
      }
  `