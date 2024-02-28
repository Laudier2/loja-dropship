import styled from "styled-components";

export const ConatinerModal = styled.div`
  
  & div {
    & ul {

      & .liImageName {
        margin: auto;
        display: flex;
        width: 100%;
      }

      & li {
        width: 100%;
        list-style-type: none;

        & input {
          width: 100%;
          margin-top: 10px;
        }

        & textarea {
          width: 100%;
          margin-top: 10px;
        }

      }
    }
    & .imageName {
      display: inline-block;
      margin: 2px;
    }
  }
`