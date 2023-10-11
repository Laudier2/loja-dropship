import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
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
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
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
`

export const Menos = styled.b`
  position: absolute;
  margin-top: 35px;
  margin-left: -130px;
`

export const cartQuantity = styled.b`
  margin: 10px;
`

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
`

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
`
