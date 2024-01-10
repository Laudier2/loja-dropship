import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  position: absolute;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(88, 29, 29, 0.174);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
  
  & a {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;

    & button {
      font-weight: bold;
      font-size: 30px;
    }

    @media (max-width: 768px) {
      
    }

  }

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  height: 100%;
  min-width: 200px;
  z-index: 200;
  background-color: white;
  overflow-y: scroll;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`;
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export const Mais = styled.b`
  position: absolute;
  margin-top: 35px;
  margin-left: -130px;
`;

export const Menos = styled.b`
  position: absolute;
  margin-top: 35px;
  margin-left: -130px;
`;

export const cartQuantity = styled.b`
  margin: 10px;
`;

export const TableCartFinalize = styled.div`
  & table {
    width: 960;
    margin: 0 auto;
    font-size: 1vw;

    @media(max-width: 780px) {

        & .namePosition {
          width: 60%;
          position: absolute;
          margin-top: 30px;
          margin-left: -80px;
          font-size: 2.5vw;
        } 
      }

    & td {
      & .div1 {
        width: 108px;
        border: solid 1px;
        border-radius: 8px;

        & button {
          background-color: white;
        }

        @media(max-width: 780px) {
          width: 100px;

          & .namePosition {
            position: absolute;
            margin-top: -20px;
          } 
        }

      }

      & .div2 {
        width: 80%;
        border-radius: 8px;
      }

      @media screen and (max-width: 680px) {
        font-size: 3vw;

        & .divimg {
          position: absolute;
          margin-top: -5px;
        }

        & .divnome {
          margin-left: 20px;
          font-size: 1.8vw;
        }
      }
    }

    & thead {
      display: flex;

      & tr {
        display: flex;

        & h2 {
          margin-top: 10px;
          font-weight: bold;
        }

        @media(max-width: 768px){
          & h2 {
            font-size: 4vw;
          }
        }
      }
    }

    & tbody {
      display: table;

      & img {
        width: 30%;
      }

      & td {
        display: table-cell;
        padding: 10px;
        width: 300px;

        & b {
          font-weight: bolder;

          @media (max-width: 768px) {
            position: absolute;
            
            & p {
              margin-top: 28px;
              margin-left: -60px;
              font-size: 12px;
            }
          }
        }

        & button {
          border: none;
          border-radius: 8px;
          font-weight: bold;
          background-color: aqua;

          &:hover {
            background-color: rgba(0, 255, 255, 0.582);
            color: #000000;
            font-weight: bold;
          }
        }
      }
    }
  }

  & button {
    margin: 8px
  }

  @media (max-width: 768px) {
    & table {
      width: 960;
      margin: 0 auto;

      & thead {
        display: flex;

        & tr {
          display: flex;
        }
      }

      & tbody {
        display: table;

        & img {
          width: 50px;
        }

        & td {
          display: table-cell;
          padding: 5px;
          width: 200px;
          font-size: 8p;

          & b {
            margin: 5px;
            font-size: 8p;
          }
        }
      }
    }
  }
`;

export const CartVazio = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  float: left;

  & a {
    text-decoration: none;
    margin-left: 20px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 2vw;
    width: 30%;
    height: 10vh;
    text-shadow: 0 0 0 10px #000000;
  }

  & img {
    width: 100%;
  }

  @media (max-width: 768px) {
   
  }
`

export const CartIcon = styled.div`
  text-align: left;
  color: aqua;
  margin-top: 5px;
`

export const ButtonCard = styled.button`
  background-color: aqua;
  width: 90%;
  font-weight: bold;
  margin-left: 15px;
  border: none;
  border-radius: 6px;
`

export const SubTotal = styled.div`
  border-radius: 70px;
  width: 13%;
  border: solid 0.9px;
  padding: 10px;
  text-align: center;
  margin-left: 68%;
  margin-top: -80px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;

  @media (max-width: 768px) {
    width: 35%;
    font-size: 12px;
    margin-left: 55%;
    margin-top: -100px;
  }
`;

export const Button = styled.button`
  background-color: aqua;
  border: none;
  border-radius: 6px;
  width: 30%;
  padding: 10px;
  text-align: center;
  margin-left: 35%;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;

  & a {
    text-decoration: none;
    text-align: center;
    color: black;
    border: none;
  }

  &:hover {
    background-color: rgba(0, 255, 255, 0.582);
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 15px;
    margin-left: 10%;
    margin-top: 70px;
  }
`;

export const ButtonClearCart = styled.button`
  background-color: aquamarine;
  border: none;
  border-radius: 6px;
  width: 10%;
  padding: 10px;
  text-align: center;
  margin-left: 1%;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: red;
    color: white;
  }

  @media (max-width: 768px) {
    width: 30%;
    font-size: 15px;
    margin-left: 10%;
  }
`;
