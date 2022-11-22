import styled from "styled-components";

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

  // font-family: Definir;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
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

    background: #ffffff;
    border-radius: 5px;
  }
  button {
    width: 326px;
    height: 46px;

    background: #a328d6;
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

  font-family: "Raleway";
  font-style: normal;
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