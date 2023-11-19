import styled from "styled-components";

export const ConatinerMain = styled.div`
  margin-top: 7%;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
  }
`;

export const ContainerImage = styled.div`
  margin-top: -25%;
  margin-left: 28%;

  & img {
    width: 40%;
    height: 60vh;
    margin-top: 45px;

    @media (max-width: 720px) {
      margin-top: -140px;
      width: 80%;
      height: 40vh;
      margin-left: -2px;
    }
  }
`;

export const ContainerImageMini = styled.div`
  margin-left: 390px;

  & img {
    margin-top: 2px;
    border: solid gray;
    width: 80px;
    margin-left: -25px;

    @media (max-width: 768px) {
      width: 50px;
      margin-left: -365px;
      border: solid gray;
    }
  }
`;

export const ContainerDecription = styled.div`
margin-top: -28%;
  width: 250px;
  margin-left: 940px;

  & button {
    background-color: rgba(128, 128, 128, 0.575);
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: gray;
    }
  }

  & h4 {
    position: absolute;
    margin-top: 30px;
  }
  
  @media (max-width: 768px) {
    width: 320px;
    margin: auto;
    margin-top: 40px;
  }
`;

export const ContainerDecriptionSecudaria = styled.div`
  margin-top: -30%;
  width: 200px;
  margin-left: 1210px;

  & button {
    background-color: rgba(128, 128, 128, 0.575);
    border: none;
    border-radius: 4px;
    margin: 7px;

    &:hover {
      background-color: gray;
    }
  }

  @media (max-width: 768px) {
    width: 320px;
    margin: auto;
    margin-top: 40px;
  }
`;
export const ContainerDescriptionButton = styled.div`
  margin-top: -1%;
  width: 200px;
  margin-left: 1210px;

  & button {
    background-color: rgb(10, 155, 212);
    width: 80%;
    padding: 6px;
    border: none;
    border-radius: 4px;
    margin: 7px;
    font-size: 13px;

    &:hover {
      background-color: green;
    }
  }

  @media (max-width: 1600px) {
    margin-top: 1%;
    width: 200px;
    margin-left: 1210px;
  }

  @media (max-width: 768px) {
    width: 320px;
    margin: auto;
    margin-top: 40px;
  }
`;
