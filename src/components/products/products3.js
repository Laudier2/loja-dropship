import styled from "styled-components";

export const ProductProd = styled.div`
  width: 100%;
  background: transparent;
  display: inline-block;
  margin-top: 50px;

  & section {
    width: 100%;

    & div {
      width: 220px;
      height: 230px;
      display: inline-block;
      margin-left: 10px;
      margin-top: 20px;

      & .Favorit {
        opacity: 1;

        & .addFavorit {

        }

        & .removeFavorit {
          position: absolute;
          margin-top: -180px;
          color: red;
        }

        &:hover {
          opacity: 1;
        }
      }

      & img {
        width: 100%;
        height: 30vh;
        border-radius: 8px;
        margin-bottom: 5px;
        
      }

      & h5 {
        width: 100%;
        color: #000000;
        font-weight: bold;
        font-size: 1vw;
      }

      & h3 {
        color: #000000;
        font-weight: bold;
        text-align: center;
      }

      & span {
        width: 80%;
        margin: auto;
        display: flex;
        text-align: center;
        color: rgba(10, 10, 10, 0.687);

        & p {
          font-size: 1vw;
          margin-left: -15px;
          //color: #00FF00;
        }

      @media screen and (max-width: 780px) {
    
        @media (max-width: 768px) {
        width: 95%;

        & img {
          width: 100%;
          height: 10vh;
          border-radius: 8px;
        }
      }
      }
    }
    
    & .oldPrice {
      font-size: 0%.8rem;
      text-decoration: line-through;
      flex-grow: 1;
      color: red;
      opacity: 0.7;
      padding: 3px;
    }

    & button {
      background-color: rgba(0, 255, 255, 0.39); /*#00FF00*/
      width: 90%;
      margin: auto;
      display: block;
      padding: 8px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      font-weight: bolder;
      
      &:hover {
        background-color: aqua;
      }

    }
    
    @media (max-width: 768px) {
      width: 30%;

      & h5 {
        width: 100%;
        color: #000000;
        font-weight: bold;
        font-size: 2vw;
      }

      & b {
        font-size: 3.5vw;
        text-align: center;
      }

      & .cartao {
        font-size: 2vw;
      }

      & .p {
        font-size: 2vw;
        margin-left: -14px;
        margin-bottom: -2px;
        color: aquamarine;
      }
      
      & img {
        width: 100%;
        height: 55%;
        border-radius: 8px;
        margin-bottom: 2px;

        
      }      

      & h3 {
        margin-top: 50px;
        color: #000000;
        font-weight: bold;
        text-align: center;
        font-size: 5vw;
      }

      & span {
        width: 80%;
        margin: auto;
        display: flex;
        text-align: center;
        color: rgba(10, 10, 10, 0.687);
        font-size: 2vw;
      }

      & p {
       margin-left: 15px;
      }

      & button {
        background-color: aqua; /*#00FF00*/
        width: 100%;
        margin: auto;
        display: block;
        padding: 8px;
        border-radius: 6px;
        border: none;
        font-size:3vw;
        font-weight: bolder;
        
        &:hover {
          background-color: #00FF00;
        }
        }
      }
      
    }
  }
`
export const LoadingPage1 = styled.div`
 position: absolute;
  top: 30%;
  left: 45%;
`
export const LoadingPage = styled.div`
  width: 20%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`