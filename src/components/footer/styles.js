import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  margin-top: 5%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    width: 100%;
  }

  & h2 {
    font-weight: bold;
    font-size: 50px;
    text-shadow: 0 5px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
      0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    position: absolute;
    margin-left: 100px;
    margin-top: -25px;

    @media (max-width: 768px) {
      margin-left: 16px;
      margin-top: 0px;
      font-size: 40px;
      
    }
  }

  & span {
    position: absolute;
    margin-top: -35px;
    margin-left: 50.2%;
    font-weight: bold;
    font-size: 20px;
    color: aqua;

    @media (max-width: 768px) {
      width: 80%;
      margin-left: -0px;
      margin-top: 75px;
      font-size: 15px;

    }
  }

  & form {
    width: 50%;
    margin-left: 53%;
    border: none;

    & input {
      width: 250px;
      background-color: white;
      border-radius: 8px;
      border: none;
      padding: 10px;
      margin: 5px;

      @media (max-width: 768px) {
        width: 100%;
        background-color: white;
        border-radius: 8px;
        border: none;
        padding: 10px;
        margin: 5px;
      }

    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 150px;
      margin-left: 0%;
    }

    & button {
      background-color: aqua;
      padding: 10px;
      border: none;
      width: 60px;
      border-radius: 8px;

      &:hover {
        background-color: #7CFC00; /*teal*/
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-left: 4px;
      }
    }

    
  }
`;

export const ContainerFooter2 = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  border: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: -50px;
    padding: 40px;
  }

  & div {
    width: 400px;
    
    & img {
      width: 10%;
      height: 4vh;
      margin: 1px;
      margin-top: 1px;
    }

    & .img {
      width: 50%;
      height: 8vh;
    }

    @media screen and (max-width: 768px) {
      margin-left: 20px;

      & h3 {
        font-size: 15px;
      }

      & h4 {
        font-size: 12px;
      }

      & img {
        width: 18px;
        height: 2vh;
        margin: 1px;
        margin-top: 1px;
      }

      & .img {
        width: 120%;
        height: 5vh;
      }
    }
  }
`;

export const ContainerFooter1 = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: -50px;
    padding: 40px;
    
    & div {
      font-size: 2.5vw;
    }
  }

  & div {
    width: 600px;
    
    & img {
      width: 10%;
      height: 5vh;
      margin: 1px;
      margin-top: 1px;
    }

    @media screen and (max-width: 768px) {
      margin-left: 20px;

      & h3 {
        font-size: 15px;
      }

      & h4 {
        font-size: 12px;
      }

      & img {
        width: 25px;
        height: 3vh;
        margin: 2px;
        margin-top: 3px;
    }
  }
}
`;

export const ContainerFooter3 = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  & div {
    width: 600px;
    
    & img {
      width: 60px;
      height: 5vh;
      margin: 2px;
      margin-top: 3px;
    }

    @media screen and (max-width: 768px) {
      margin-left: 20px;

      & h3 {
        font-size: 15px;
      }

      & h4 {
        font-size: 12px;
      }

      & img {
        width: 25px;
        height: 3vh;
        margin: 2px;
        margin-top: 3px;
    }
  }
}
`;





