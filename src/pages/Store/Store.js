import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Logo } from "../../assets/styles/styles";
import styled from "styled-components";

export default function Store() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);

  return (
    <>
      <HeaderStyle>
        <Logo>Logomarca</Logo>
        <input placeholder="Pesquisar" />
        <div>Login</div>
        <div>Carrinho</div>
      </HeaderStyle>
      <MainStyle>
        <button onClick={() => navigate("/sign-in")}>
          <Title>Token - {user.token}</Title>
          <Title>UserId - {user.userId}</Title>
        </button>
      </MainStyle>
    </>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0;
  padding: 0 6vw;

  div {
    width: 12vw;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.4vw;
    background-color: gray;
    color: white;
  }
`;

const MainStyle = styled.main`
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8vh;
  overflow-y: auto;
  justify-content: space-evenly;
  //padding: 25px;
  gap: 4vw;
`;
