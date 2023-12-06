import styled from "styled-components";


export const FormBox = styled.div`
    position: relative;
    width: 60%;
    height: 750px;
    background: rgba(33, 36, 36, 0.63);
    border: 2px solid #ffffff80;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: inline-block;

    @media (max-width: 768px){
        position: relative;
        width: 90%;
        height: 670px;
        background: rgba(33, 36, 36, 0.63);
        border: 2px solid #ffffff80;
        border-radius: 20px;
        backdrop-filter: blur(15px);
        display: inline-block;
    }
`
export const LoadingPage1 = styled.div`
 position: absolute;
  top: 30%;
  left: 45%;
`
export const LoadingPage = styled.div`
  width: 20%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`
