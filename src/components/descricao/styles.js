import styled from "styled-components";

export const ConatinerMain = styled.div`
  margin-top: 10%;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
  }
`;

export const ContainerImage = styled.div`
  margin-top: -25%;
  margin-left: 28%;
  width: 350px;

  & img {
    width: 260px;
    height: 50vh;
    margin-top: 45px;

    @media (max-width: 1600px) {
      width: 180px;
      margin-left: 70px;
      margin-top: 60px;
    }

    @media (max-width: 1400px) {
      width: 180px;
      margin-left: 250px;
      margin-top: -5px;
    }

    @media (max-width: 768px) {
      width: 160px;
      margin-left: 20px;
      margin-top: -30%;
    }
  }
`;

export const ContainerImageMini = styled.div`
  margin-left: 390px;
  width: 10px;

  & img {
    width: 60px;
    margin-top: 2px;
    border: solid gray;

    @media (max-width: 1600px) {
      width: 30px;
      margin-left: -2px;
    }

    @media (max-width: 768px) {
      width: 30px;
      margin-left: -365px;
      border: solid gray;
    }
  }
`;

export const ContainerDecription = styled.div`
  margin-top: -26%;
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

  @media (max-width: 1600px) {
    margin-top: -23%;
    width: 250px;
    margin-left: 940px;
  }

  @media (max-width: 1400px) {
    margin-top: -37%;
    width: 250px;
    margin-left: 940px;
  }

  @media (max-width: 768px) {
    width: 320px;
    margin: auto;
    margin-top: 40px;
  }
`;

export const ContainerDecriptionSecudaria = styled.div`
  margin-top: -25%;
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

  @media (max-width: 1600px) {
    margin-top: -31%;
    width: 200px;
    margin-left: 1210px;
  }

  @media (max-width: 768px) {
    width: 320px;
    margin: auto;
    margin-top: 40px;
  }
`;
export const ContainerDescriptionButton = styled.div`
  margin-top: 1%;
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
