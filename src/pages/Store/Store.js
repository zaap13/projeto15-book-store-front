import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Title, MainStyle } from "../../assets/styles/styles";
import Header from "../../components/Header";
import { FiLogIn as LoginIcon } from "react-icons/fi";

export default function Store() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);

  return (
    <>
      <Header>
        {!user.token ? (
          <button onClick={() => navigate("/sign-in")}>
            <LoginIcon />
          </button>
        ) : (
          <button onClick={() => navigate("/profile")}>Perfil</button>
        )}
      </Header>
      <MainStyle>
        <button onClick={() => navigate("/sign-in")}>
          <Title>Token - {user.token}</Title>
          <Title>UserId - {user.userId}</Title>
        </button>
      </MainStyle>
    </>
  );
}
