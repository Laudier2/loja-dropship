import styled from "styled-components";

export const ProductProd = styled.div`
  width: 100%;
  background: transparent;
  display: inline-block;
  margin-top: 50px;

  & section {
    width: 100%;

    & div {
    width: 300px;
    height: 300px;
    display: inline-block;
    margin-left: 10px;
    margin-top: 25px;

    & img {
      width: 100%;
      height: 90%;
      border-radius: 8px;
      margin-bottom: 5px;
      
    }

    & h5 {
      width: 100%;
      color: #000000;
      font-weight: bold;
      font-size: 13px;
    }

    & h3 {
      color: #000000;
      font-weight: bold;
      text-align: center;
    }

    & span {
      width: 60%;
      margin: auto;
      display: flex;
      text-align: center;
      color: rgba(10, 10, 10, 0.687);

      & .cartao {
        position: absolute;
        margin-left: -25px;
        margin-top: 2px;
      }

     @media screen and (max-width: 780px) {
      & .cartao {
        position: absolute;
        margin-left: -12px;
      }
     }
    }

    & button {
      background-color: aqua; /*#00FF00*/
      width: 90%;
      margin: auto;
      display: block;
      padding: 8px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      font-weight: bolder;
      
      &:hover {
        background-color: #00FF00;
      }

    }
    @media (max-width: 768px) {
      width: 30%;
      
      & img {
        width: 100%;
        height: 55%;
        border-radius: 8px;
        margin-bottom: 2px;

        
      }

      & h5 {
        width: 100%;
        color: #000000;
        font-weight: bold;
        font-size: 1.8vw;
        position: absolute;
        margin-top: 5px;
        width: 30%;
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