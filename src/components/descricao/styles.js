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

    & .formatImg {
      height: 80vh;
    }

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

    @media (max-width: 1350px) {
      & .formatImg {
        height: 40vh;
        margin-bottom: 10%;
      }
    }

    @media (max-width: 768px) {
      width: 100%;

      & .formatImg {
        height: 40vh;
      }
    }
  }

  & .div3 {
    margin-top: -2px;
    margin-left: -3px;
    width: 80px;
    position: absolute;

    & img {
      width: 100%;
      border: solid 1px;

      &:hover {
        border-color: aqua;
      }
    }

    @media (max-width: 1350px) {
      & img {
        width: 40px;
      }
    }

    @media (max-width: 971px) {
      width: 8%;

      & img {
        width: 40px;
      }
    }

    @media (max-width: 850px) {

      & img {
        width: 40px;
      }
    }

    @media (max-width: 680px) {

      & img {
        width: 40px;
      }
    }

    @media (max-width: 280px) {
    
      & img {
        width: 10px;
        font-size: 10px;
      }
    }
    
  }

`

export const ContainerDesc = styled.div`

@media (max-width: 1750px) {
  position: inherit;
  margin-top: -6%;
}

@media (max-width: 1550px) {
  position: inherit;
  margin-top: -12%;
}

@media (max-width: 1350px) {
  position: inherit;
  margin-top: 3%;
}

@media (max-width: 1150px) {
  position: inherit;
  margin-top: -2%;
}

@media (max-width: 950px) {
  position: inherit;
  margin-top: -9%;
}

@media (max-width: 768px) {
  width: 80%;
  margin: auto;
  position: inherit;
  margin-top: 10%;
  font-size: 3vw;
}

& .divdesc {
  width: 16%;
  margin: auto;  
  margin-top: -41%;
  margin-left: 52%;
  font-size: 1vw;

  @media (max-width: 1750px) {
    position: inherit;
    margin-top: -47.5%;
  }

  @media (max-width: 1550px) {
    position: inherit;
    margin-top: -52%;
  }

  @media (max-width: 1350px) {
    position: inherit;
    margin-top: -40%;
  }

  @media (max-width: 1150px) {
    position: inherit;
    margin-top: -49%;
  }

  @media (max-width: 950px) {
    position: inherit;
    margin-top: -56%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    position: inherit;
    font-size: 3vw;
  }

  & .h4 {
      width: 15px;
    }

  & h5 {
    font-size: 1vw;
  }

  & h4 {
    font-size: 1vw;
  }

  & h1 {
    font-weight: bold;
    font-size: 2vw;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    position: inherit;
    font-size: 3vw;

    & h5 {
      font-size: 5vw;
    }

    & h4 {
      font-size: 5vw;
    }

    & h1 {
      font-size: 4vw;
    }
  }

  & button {
    background-color: whitesmoke;
    border-radius: 6px;
    font-weight: bold;
    margin: 3px;
    padding: 5px;

    &:hover {
      background-color: rgb(188, 204, 204);
    }
  }
}

& .divdescSecudare {
  width: 13%;
  margin: auto;
  margin-top: -25.2%;
  margin-left: 70%;
  font-size: 1vw;

  @media (max-width: 1750px) {
    position: inherit;
    margin-top: -26.5%;
  }

  @media (max-width: 1550px) {
    position: inherit;
    margin-top: -26.5%;
  }

  @media (max-width: 1350px) {
    position: inherit;
    margin-top: -27%;
  }

  @media (max-width: 1150px) {
    position: inherit;
    margin-top: -32%;
  }

  @media (max-width: 950px) {
    position: inherit;
    margin-top: -35%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    position: inherit;
    font-size: 3vw;
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
`
export const ContainerSobre = styled.div`
  width: 50%;
  margin: 50px;

  @media (max-width: 768px) {
    width: 80%;
  }
`
