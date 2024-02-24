import styled from "styled-components";

export const ConatinerComentarios = styled.div`
  margin: 3%;
  padding: 3%;
  
  & h1 {
    color: #222222;
    text-align: center;
    font-size: 2vw;
  }

  & section {
    margin: auto;
    width: 90%;

    & .div2 {

    & h5 {
      color: #222222;
      font-size: 1.3vw;
      font-weight: bold;
      display: inline-block;
      margin: 5px;
    }

    & img {
      width: 4%;
      height: 3%;
      border-radius: 50%;
    }

    & p {
      text-align: justify;
      font-size: 1.2vw;
      width: 80%;

      @media(max-width: 768px) {
        font-size: 2.8vw;
      }
    }
    } 

    & .div1 {
    margin-bottom: 30px;

    & img {
      width: 7%;
      height: 14vh;
      border-radius: 8px;
      margin: 2px;
      cursor: pointer;
      //box-shadow: 1px 1px 3px 3px gray;

      &:hover {
        box-shadow: 0 0 0 3px gray;
      }

      @media(max-width: 768px) {
        width: 20%;
        height: 12vh;
      }

    }
    }

    & .imgTeste {
      width: 80px;
      height: 80px;
      display: inline-block;
    }
  }

`
