import styled from "styled-components";

export const ContainerComentario = styled.div`
  margin-top:60px;

  & .btnButtonModalImageComentario {
    border: none;
  }

  & h1 {
    color: #222222;
    text-align: center;
    font-size: 2vw;
    margin-bottom: 50px;
    display: inline-block;

    @media(max-width: 768px) {
      font-size: 4vw;
      margin-bottom: 20px;
    }
  }

  & .imgName {
    margin-top: -2%;
    width: 4.5%;
    border-radius: 50px;
    display: inline-block;
    border: solid 1px;

    @media (max-width: 768px) {
      width: 10%;
      font-size: 2.5vw;
      
    }
  }

  & h5 {
    font-size: 1.2vw;
    font-weight: bold;
    display: inline-block;
    margin-left: 5px;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  & p {
    font-size: 1.2vw;
    display: inline-block;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  & .imgList {
    width: 90px;
    height: 90px;
    margin: 3px;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 70px;
      height: 80px;
      margin: 3px;
      border-radius: 8px;
    }

    &:hover {
      border: solid 0.5px;
    }
  }

  & .btnButtonModal {
      margin-left: 70%;
      padding: 8px;
      background: aqua;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: bold;

      &:hover {
        background: yellow;
        box-shadow: 0 0 0 0.3px black;
      }

      @media (max-width: 768px) {
        font-size: 2.6vw;
      }
    }
  

  @media (max-width: 768px) {

    & .btnButtonModal {
      padding: 8px;
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
        font-size: 2.6vw;
      }
    }
  }

  @media (max-width: 768px) {
  }
  
`
