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
      margin-left: -5px;
      margin-top: -45px;
      font-size: 40px;
    }
  }

  & span {
    position: absolute;
    margin-top: -35px;
    margin-left: 45%;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 768px) {
      width: 80%;
      margin-left: -0px;
      margin-top: 5px;
      font-size: 15px;
    }
  }

  & form {
    width: 50%;
    margin-left: 48%;

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
      margin-top: 50px;
      margin-left: 0%;
    }

    & button {
      background-color: gray;
      padding: 10px;
      border: none;
      border-radius: 8px;

      &:hover {
        background-color: #7CFC00;
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
      & h3 {
        font-size: 10px;
      }

      & h4 {
        font-size: 10px;
      }
    }
  }

  & main {
    width: 300px;
    position: absolute;
    margin-left: 80%;
    
    & img {
      width: 150px;
      height: 7vh;
      margin: 2px;
      margin-top: 3px;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      & h3 {
        font-size: 10px;
      }

      & h4 {
        font-size: 10px;
      }
    }
  }
`;





