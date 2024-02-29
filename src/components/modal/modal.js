import styled from "styled-components";

export const ConatinerModal = styled.div`


  
  & div {

    & .btnEnviar {
      width: 100%;
      background: aqua;
      padding: 10px;
      border-radius: 8px;
      font-weight: bold;
      outline: none;
      border: none;

      &:hover {
        background: #00FF00;
        box-shadow: 0 0 0 0.px black;
        padding: 12px;
      }
    }

    & ul {

      & .liImageName {
        margin: auto;
        display: flex;
        width: 100%;
      }

      & li {
        width: 100%;
        list-style-type: none;

        & input {
          width: 100%;
          margin-top: 10px;

          &:focus {
            outline: none;
            background: #A9B6B6;
          }
        }

        & textarea {
          width: 100%;
          margin-top: 10px;

           &:focus {
            outline: none;
            background: #A9B6B6;
          }
        }

      }
    }
    & .imageName {
      display: inline-block;
      margin: 2px;
    }

   
  }
`