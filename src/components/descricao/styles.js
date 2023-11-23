import styled from "styled-components";

export const ConatinerMain = styled.div`
  margin-top: 7%;
  width: 100%;

  & .div1 {
    width: 60px;
    margin-left: 10%;
    margin-top: 2px;

    & img {
      width: 80px;
    }

    @media (max-width: 768px) {
      width: 40px;
      margin-left: 10%;
      
      & img {
        width: 40px;
        margin-top: 2px;
      }

    }
    
  }

  & .div2 {
    width: 80%;
    display: flex;
    margin: auto;

    & img {
      width: 50%;
    }

    @media (max-width: 768px) {
      width: 0%;
      margin-left: 0%;
      margin-top: 0%;
      
      & img {
        width: 80%;
        display: flex;
        margin: auto;
      }

    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  & .div3 {
    width: 80px;
    margin-left: 10%;
    margin-top: -40%;
    position: absolute;

    @media (max-width: 768px) {
      margin-top: -399%;
      margin-left: 30px;
      background: transparent;
    }
    
  }

  & .divdesc {
    width: 16%;
    margin: auto;
    position: absolute;
    margin-top: -40%;
    margin-left: 52%;

    @media (max-width: 768px) {
      width: 80%;
      margin: auto;
      position: inherit;
      margin-top: 10%;
    }

    & button {
      background-color: whitesmoke;
      border-radius: 6px;
      font-weight: bold;
      margin: 3px;
      padding: 5px;

      &:hover {
        background-color: rgb(25, 176, 179);
      }
    }
  }

  & .divdescSecudare {
    width: 13%;
    margin: auto;
    position: absolute;
    margin-top: -40%;
    margin-left: 70%;

    @media (max-width: 768px) {
      width: 80%;
      margin: auto;
      position: inherit;
      margin-top: 10%;
    }

    & button {
      background-color: aqua;
      width: 80%;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      margin: 3px;
      padding: 5px;

      &:hover {
        background-color: #00FF00;
      }
    }
  }
`;
