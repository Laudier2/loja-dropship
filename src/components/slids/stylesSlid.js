import styled from "styled-components"

export const CoontainerSlids = styled.div`
  margin: 0 auto;
  background: yellow;

  & .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-top: 40px;

    &::-webkit-scrollbar {
      display: none;
    }

    & .item {
      background-color: transparent;
      margin: 10px;
      padding: 10px;
      width: 400px;
      height: 42vh;
      flex: none;
      cursor: pointer;

      & .image {
        & img {
          width: 380px;
          height: 40vh;
          object-fit: cover;
          margin: auto;
          display: flex;
        }
      }
      @media (max-width: 768px) {
        width: 280px;
        height: 20vh;

        & .image {
          & img {
            width: 340px;
            height: 20vh;
            object-fit: cover;
            margin: auto;
            display: flex;
          }
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
        color: #000000;
      }

      & h5 {
        color: #000000;
        display: inline-block;
        font-weight: bold;
      }
    }

    & a {
        text-decoration: none;
        border: solid 1px;
        margin: 5px;
        color: darkolivegreen;
        padding: 5px;
      }

    & .oldPrice {
      font-size: 1.3rem;
      text-decoration: line-through;
      flex-grow: 1;
      color: red;
      opacity: 0.7;
      padding: 3px;
      margin: 5px;
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
    margin-top: 1px;

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
  margin-top: -180px;
}

& button {
  border: none;
  background: transparent
}
`