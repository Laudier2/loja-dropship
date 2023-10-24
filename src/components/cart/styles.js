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

    & thead {
      display: flex;

      & tr {
        display: flex;
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
          margin: 5px;
        }

        & button {
          border: none;

          &:hover {
            background-color: gba(54, 51, 51, 0.466);
            color: rgba(0, 255, 255, 0.582);
            font-weight: bold;
          }
        }
      }
    }
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

export const SubTotal = styled.div`
  border-radius: 70px;
  width: 20%;
  border: solid 0.5px;
  padding: 10px;
  text-align: center;
  margin-left: 74%;
  margin-top: -80px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;

  @media (max-width: 768px) {
    width: 20%;
    font-size: 18px;
    margin-left: 60%;
    margin-top: -70px;
  }
`;

export const Button = styled.button`
  background-color: aquamarine;
  border: none;
  border-radius: 6px;
  width: 30%;
  padding: 10px;
  text-align: center;
  margin-left: 40%;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: rgba(0, 255, 255, 0.582);
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 15px;
    margin-left: 10%;
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
