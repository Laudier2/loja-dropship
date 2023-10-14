import styled from "styled-components";

export const ConatinerMain = styled.div`
    width: 100%;
`

export const ContainerImage = styled.div`
    position: absolute;
    width: 50%;

    & img {
        width: 250px;
        margin-top: 45px;
        margin-left: 600px;

        @media (max-width: 768px) {
            width: 160px;
            margin-left: 60px;
        }
    }

`

export const ContainerImageMini = styled.div`
    position: absolute;
    margin-left: 400px;
    width: 10px;

    & img {
        width: 50px;
        margin-top: 5px;

        @media (max-width: 768px) {
            width: 160px;
            margin-left: 60px;
        }
    }

`

export const ContainerDecription = styled.div`
  position: absolute;
  width: 250px;
  margin-left: 940px;

  @media (max-width: 768px) {
    width: 250px;
    margin-left: 3px;
    margin-top: 400px;
  }
`

export const ContainerDecriptionSecudaria = styled.div`
  position: absolute;
  width: 200px;
  margin-left: 1210px;

  @media (max-width: 768px) {
    width: 250px;
    margin-left: 3px;
    margin-top: 900px;
  }
`
