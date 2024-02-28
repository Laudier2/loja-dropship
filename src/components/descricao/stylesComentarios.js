import styled from "styled-components";

export const ConatinerComentarios = styled.div`
  margin: 3%;
  padding: 3%;
  
  & h1 {
    color: #222222;
    text-align: center;
    font-size: 2vw;
    margin-bottom: 50px;
    display: inline-block;
    margin-left: 350px;

    @media(max-width: 768px) {
      font-size: 4vw;
      margin-bottom: 20px;
      margin-left: 120px;
    }
  }

  & .btnButtonModal {
    padding: 8px;
    position: absolute;
    margin-left: 150px;
    background: aqua;
    outline: none;
    border: none;
    border-radius: 6px;
    font-weight: bold;

    &:hover {
      background: #00FF00;
      box-shadow: 0 0 0 0.px black;
      padding: 12px;
    }

    @media (max-width: 768px) {
      margin-left: -130px;
      font-size: 2.3vw;
      margin-top: 30px;
    }
  }

  & span {
    margin-left: 10px;
    
    font-weight: bold;

    & p {
      font-size: 2.5vw;
      margin-left: 1px;

      @media(max-width: 768px) {
        font-size: 4vw;
      }
    }

    @media(max-width: 768px) {
      font-size: 5vw;
      position: absolute;
      margin-top: -2px;
      margin-left: -1px;
    }
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

    & .estrelas {
    font-size: 23px;
    margin-top: -5px;

    @media (max-width: 768px) {
      font-size: 12px;
      margin-top: -0.5px;

    }
  }

  & .estrelas2 {
    font-size: 20px;
    margin-top: -5px;

    @media (max-width: 768px) {
      font-size: 11px;
      margin-top: 1px;
    }
  }

  & .estrelas3 {
    font-size: 33px;
    margin-top: -8px;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-top: -0.5px;

    }
  }

  & .estrelas4 {
    font-size: 38px;
    margin-top: -10px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-top: -1px;

    }
  }
  }

`
