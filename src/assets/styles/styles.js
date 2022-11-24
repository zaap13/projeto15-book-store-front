import styled from "styled-components";
import { logoFont } from "../../constants/fonts";

export const Main = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;
  gap: 15px;

  span {
    display: flex;
    gap: 15px;
  }
`;

export const Logo = styled.h1`
  font-family: ${logoFont};
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;
  width: 40vw;

  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  input {
    width: 40vw;
    height: 58px;

    background: #c4c4cc;

    border-radius: 5px;
    padding-left: 1vw;
  }
  button {
    width: 40vw;
    height: 46px;

    background: #018792;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    cursor: pointer;
    color: #ffffff;
  }
`;

export const Text = styled.p`
  height: 18px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #ffffff;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;

// Store/Profile

export const MainStyle = styled.main`
  height: 88vh;
  display: flex;
  margin-top: 12vh;
  overflow-y: auto;
  align-items: flex-start;
  justify-content: center;
  padding: 4vh;
  flex-direction: column;
  gap: 4vw;
  background-color: #1b1b1b;
`;

export const BookDiv = styled.div`
  width: 15vw;
  height: 25vw;
  background-color: #ffffff;
  border-radius: 1.4vw;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
  justify-content: center;
  align-items: center;
  padding: 2vw 1vw 3vw 1vw;
  position: relative;
  font-size: 1.5vw;

  > img {
    width: 10vw;
  }

  h1 {
    text-align: center;
  }
  :hover {
    opacity: 0.6;
  }
`;

export const BooksBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 100%;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0.5vw;
  display: flex;
  align-items: center;
  gap: 0.8vw;
  font-size: 1vw;

  img {
    width: 1.2vw;
    height: 1.2vw;
    cursor: pointer;
  }
`;
