import styled from "styled-components";

export const Slids2 = styled.div`
  max-width: 900px;
  height: 300px;
  display: flex;
  margin: auto;
  cursor: grab;
  overflow: hidden;

  & div {
    display: flex;
    translate: ;
  }

  & img {
    width: 900px;
    height: 300px;
    margin: auto;
    display: flex;
    padding: 5px;
    border-radius: 12px;
    pointer-events: none;
  }
`;

export const Slids = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 400px;
  overflow: hidden;
  display: flex;

  & input {
    display: flex;
  }

  & img {
    width: 800px;
    position: relative;
  }

  & label {
    position: absolute;
    width: 80px;
    margin-top: -40px;
    display: flex;
    justify-content: center;

    & button {
      border: 2px solid #000;
      padding: 5px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
