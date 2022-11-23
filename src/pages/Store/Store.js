import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Title,
  Logo,
  HeaderStyle,
  MainStyle,
} from "../../assets/styles/styles";
import {
  FiShoppingCart as CartIcon,
  FiLogIn as LoginIcon,
} from "react-icons/fi";

export default function Store() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);

  return (
    <>
      <HeaderStyle>
        <Logo>BookStore</Logo>
        <input placeholder="Pesquisar" />

        {!user.token ? (
          <button onClick={() => navigate("/sign-in")}>
            <LoginIcon />
          </button>
        ) : (
          <button onClick={() => navigate("/profile")}>Perfil</button>
        )}

        <button>
          <CartIcon />
        </button>
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
