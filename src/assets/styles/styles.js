import styled from "styled-components";
import { logoFont } from "../../constants/fonts";

export const Main = styled.main`
  height: 100vh;
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

  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  input {
    width: 326px;
    height: 58px;

    background: #c4c4cc;

    border-radius: 5px;
  }
  button {
    width: 326px;
    height: 46px;

    background: #018792;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }
`;

export const Text = styled.p`
  height: 18px;
  left: 92px;
  top: 457px;

  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #ffffff;
`;

export const Title = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;

// Store/Profile

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 12vh;
  position: fixed;
  top: 0;
  padding: 0 6vw;
  background-color: #060606;
  button {
    display: flex;
    width: 10vw;
    height: 6vh;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.4vw;
    background-color: #018792;
    color: #ffffff;
    cursor: pointer;
  }
  input {
    width: 260px;
    height: 30px;

    background: #c4c4cc;

    border-radius: 5px;
  }
`;

export const MainStyle = styled.main`
  height: 88vh;
  display: flex;
  flex-wrap: wrap;
  margin-top: 12vh;
  overflow-y: auto;
  justify-content: space-evenly;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 4vh;
  //padding: 25px;
  gap: 4vw;
  background-color: #1b1b1b;
`;
