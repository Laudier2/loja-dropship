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
  }
`;

/*export const ContainerImage2 = styled.div`
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

export const ContainerImageMini2 = styled.div`
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

export const ContainerDecription2 = styled.div`
margin-top: -28%;
  width: 250px;
  margin-left: 940px;

  & button {
    background-color: rgba(128, 128, 128, 0.575);
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: whitesmoke;
    }
  }

  & h4 {
    position: absolute;
    margin-top: 30px;
  }
  
  @media screen and (max-width: 768px) {
    width: 320px;
    margin: auto;
    margin-top: 40px;
  }
`;

export const ContainerDecriptionSecudaria2 = styled.div`
  margin-top: -45%;
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
*/