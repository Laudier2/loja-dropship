import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 2.5vw;
  text-shadow: 0 5px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
    0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);

  & a {
    margin-left: 1px;
    color: white;
    text-decoration: none;

    &:hover {
      color: #B3B3B3;
    }

    @media (max-width: 768px) {
      font-size: 7vw;
      margin-left: -15px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
    b {
      position: absolute;
      margin-left: 14px;
      margin-top: 7px;
      font-size: 11px;
    }
  }

  @media (max-width: 768px){
    float: right;
    margin-right: -20px;
    margin-top: -30px;
  }
`;

export const ContainerAMR = styled.div`
  width: 100%;
  background-color: #FDD201;
  text-decoration: none;
  justify-content: space-between;
  color: #eee;
  padding: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  text-align: center;

  & a {
    text-decoration: none;
    color: black;
  }
`;

export const CartIconVazio = styled.div`
  width: 5%;
`

export const ContainerPRT = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  & ul {
    display: flex;
    margin: auto;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: -10px;
    }

    & li {
      display: inline-block;
      margin-left: 50px;
      padding: 0px 10px;
      border-radius: 6px;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0px 3px;
        margin: 1px;
        margin-left: 5px;

        &:hover {
          margin-left: -10px;
          padding: 0px 1px 4px 20px;
          background-color: #FDD201;
        }
        
        & a {
          color: #000000;
        }

        & .h4 {
          display: mome;
        }

        & span {
          position: absolute;
          margin-top: -20px;
          margin-left: -10px;

          @media (max-width: 768px){
            margin-left: 3px;
          }
        }
        
      }

     
      & button {
        text-decoration: none;
        background-color: #000000;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 20px;

        &:hover {
          background-color: #FDD201;
          color: #000000;
        }

        @media (max-width: 768px) {
          width: 100%;
          margin-left: -10px;
          font-size: 1.8vw;
        }
      }
      

      &:hover {
        background-color: #FDD201;

        & .li {
          padding: -15px;
        }

        & a {
          color: #000000;
        }

      }

      & a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 20px;

        @media (max-width: 768px) {
          width: 100%;
          margin-left: -10px;
          font-size: 1.8vw;
          margin-left: 1px;
        }
      }
    }
  }
`
export const DropDow = styled.div`

  list-style:none;
  margin-top: -4px;  

  & ul{
    position: absolute;
  }

  & div li a{
    color:#333; 
    text-decoration:none; 
    display:block;
    font-size: 1vw;

    @media (max-width: 768px) {
      font-size: 2vw;
      position: absolute;
    }
  }



  & ul{
    position:absolute;
    top:32px;
    margin-left:-80px;
    background-color:#fff;
    display:none;
    border-radius: 10px;
    text-align: left;
    
  }

  & li:hover ul, li.over ul{display:block;}

  &:hover{
    background: transparent;
  }

  @media (max-width: 768px) {

    margin-top: 0px;

    & ul{
      position:absolute;
      width: 120px;
      top:32px;
      margin-left:-50px;
      background-color:#fff;
      display:none;
      border-radius: 10px;
      text-align: left;
      border: 1px;
      
    }
  }
  
`

export const IcomCategory = styled.div`
  position: absolute;
  color: #ffff;
  margin-left: 48px;
  margin-top: 10px;
`

