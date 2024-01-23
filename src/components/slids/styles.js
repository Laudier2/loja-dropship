// CSS do component de slidsMenu

import styled from "styled-components"

export const Coontainer = styled.div`
  margin: 0 auto;
  background: yellow;

  &:hover {
    background: darkcyan;
  }

  & .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    & .item {
      background-color: white;
      margin: 10px;
      padding: 10px;
      width: 100px;
      height: 13vh;
      border-radius: 50px;
      flex: none;
      cursor: pointer;
      
      &:hover {
        background-color: darkgray;
      }

      & .image {
        & img {
          width: 100%;
          height: 10vh;
          object-fit: cover;
          margin: auto;
          display: flex;
          border-radius: 40px;
        }
      }
    }

    & .info {
      margin-top: 16px;

      & .name {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  & .buttons1 {
    left: 0;
    position: absolute;
    width: 20%;
    height: 170px;
    background-color:rgba(255, 255, 255, 0);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    /*overflow: hidden;*/
    cursor: pointer;
    opacity: 1;
    margin-left: 0%;
    margin-top: -48px;

   @media (max-width: 768px){
    &:hover{
      opacity: 0;
    }
   }
}

& .buttons2 {
  right: 0;
  position: absolute;
  width: 20%;
  height: 170px;
  background-color:rgba(255, 255, 255, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
  cursor: pointer;
  opacity: 1;
  margin-right: 0%;
  margin-top: -125px;
}

 
`