import styled from "styled-components";

export const ProductItems = styled.div`
    display: inline-block;
`
export const ContainerBody = styled.div`
    margin: auto;
    display: flex;
    height: 100%;
    width: 80%;
`
export const ContainerProduct = styled.div`
    margin: 10px;
    width: 200px;
    display: inline-block;

    & img {
        margin-top: 50px;
        width: 160px;
        height: 28vh;
        border-radius: 6px;
        transition: 1s;

        &:hover {
            transform: scale(1.3);
            box-shadow: 0px 0px 0px rgb(54, 52, 52);
            border-radius: 6px;
            z-index: 2;
        }
    }
`

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 300px;
  width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 1s ease;
  background-color: transparent;
  background-blend-mode: color;
  margin: 12px;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 0px rgb(54, 52, 52);
        border-radius: 6px;
        z-index: 2;
    }
    

    button {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s ease;
        margin: 2px;
        font-size: 13px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        background-blend-mode: color;
        cursor: pointer;

        button {
        visibility: visible;
        opacity: 1;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ProductInfo = styled.div`
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    position: absolute;
    font-weight: bold;

    & p:hover {
        visibility: hidden;
        opacity: 0;
    }
`;
