import styled from "styled-components";

export const ProductContainerPai = styled.div`
  width: 90vw;
  height: 100vh;
  margin: auto;
  display: flex;
  margin-top: 50px;

  display: grid;
  grid-template-areas: "l r" "f f";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-areas: "r" "l" "f";
    grid-template-columns: 1fr;
  }
`

export const ProductDescImage = styled.div`
  grid-area: l;
  width: 50vw;
  height: 50vh;
    
  & img {
    width: 42vw;
    //object-fit: cover;
    height: 80vh;
    margin-left: 80px;
  }
  
  @media screen and (max-width: 768px) {
    margin-top: -50px;

    & img {
      width: 70vw;
      //object-fit: cover;
      height: 40vh;
      margin-left: 40px;
      margin-top: 20px;
    }
  }

`
export const ProductImageMini = styled.div`
  grid-area: l;

  & .imgMini {
    margin: 1px;
    & img {
      width: 5vw;
      height: 5vw;
      object-fit: cover;
      display: grid;
      border: solid 0.5px;

      @media screen and (max-width: 1168px) {
        width: 6vw;
        height: 6vw;
      }

      @media screen and (max-width: 1068px) {
        width: 8vw;
        height: 8vw;
      }
      @media screen and (max-width: 768px) {
        width: 15vw;
        height: 15vw;
      }

    }
  }

  @media (max-width: 896px) {
    margin-top: -48px;
    margin-left: -15px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -30px;
    margin-left: -20px;
  }
`
export const ProductDescPrimary = styled.div`
  width: 17vw;
  grid-area: r;
  margin-left: 10px;

  @media (max-width: 1750px) {
    width: 17vw;
    grid-area: r;
    margin-left: -30px;
  }

  @media (max-width: 1350px) {
    width: 17vw;
    margin-left: 10px;
  }

  @media (max-width: 1171px) {
    width: 20vw;
    margin-left: 40px;
  }

  @media (max-width: 970px) {

  }

  @media (max-width: 780px) {
    margin-top: 300px;
    margin-left: 0px;
    position: absolute;
    width: 80%;
    
  }

  & button {
    margin: 2px;
    border: none;
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: #FDD201;
      box-shadow: 0 0 0 0.3px black;
    }
  }

  & .divDesc {

  margin: auto;
    & h5 {
      & strong {
        font-size: 1.2vw;

        @media screen and (max-width: 768px) {
          font-size: 4.2vw;
        }
      }
    }
  }
`
export const ProductDescPrimary2 = styled.div`
  width: 14vw;
  grid-area: r;
  margin-left: 350px;

  @media (max-width: 1750px) {
    width: 17vw;
    margin-left: 265px;
  }

  @media (max-width: 1350px) {
    width: 20vw;
    margin-left: 280px;
  }

  @media (max-width: 1171px) {
    width: 14vw;
  }

  @media (max-width: 970px) {
    width: 20vw;
    margin-left: 250px;
  }

  @media (max-width: 780px) {
    margin-top: 948px;
    margin-left: 0px;
    position: absolute;
    width: 80%;
  }

  & button {
    background: aqua;
    border: none;
    margin: 1.5px;
    padding: 5px;
    width: 100%;
    border-radius: 8px;
    font-weight: bold;

    &:hover {
      background: #FDD201;
      box-shadow: 0 0 0 0.3px black;
    }
  }

  & .divDesc {
    & h5 {
      & strong {
        font-size: 2vw;
      }
    }
  }
`
export const ProductDescSecudanry = styled.div`
  grid-area: f;
  margin-top: 230px;

  @media (max-width: 1750px) {
    margin-top: 80px;
  }

  @media (max-width: 1350px) {
   
  }

  @media (max-width: 1171px) {
    margin-top: 50px;
  }

  @media (max-width: 970px) {
  
  }

  @media (max-width: 780px) {
    margin-top: 1250px;
    margin-left: 0px;
   text-align: justify;
    width: 90%;
  }
`

export const ProductDescAvaliation = styled.div`
  grid-area: f;
  margin-top: 150px;

  @media (max-width: 1750px) {
    margin-top: 250px;
  }

  @media (max-width: 1350px) {
    
  }

  @media (max-width: 1171px) {
    margin-top: 350px;
  }

  @media (max-width: 970px) {
    
  }

  @media (max-width: 780px) {

  }
`

 