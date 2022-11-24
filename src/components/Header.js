import { Logo } from "../assets/styles/styles";
import styled from "styled-components";
import {
  FiShoppingCart as CartIcon,
  FiLogOut as LogoutIcon,
  FiBookOpen as BookIcon,
} from "react-icons/fi";
import { BiBookAdd as Add } from "react-icons/bi";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CartContext from "../contexts/CartContext";

export default function Header({ children }) {
  const { user, setAuth, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { displayCart, setDisplayCart } = useContext(CartContext);
  function logout() {
    setAuth(false);
    setUser([]);
    navigate("/");
  }
  return (
    <HeaderStyle>
      <Logo onClick={() => navigate("/")}>
        <BookIcon /> BookStore
      </Logo>
      {children}

      {user.token && (
        <>
          <button onClick={() => navigate("/sale")}>
            <Add />
            <span>Anunciar</span>
          </button>
          <button onClick={() => setDisplayCart(!displayCart)}>
            <CartIcon />
            <span>Carrinho</span>
          </button>
          <button onClick={logout}>
            <LogoutIcon />
            <span>Sair</span>
          </button>
        </>
      )}
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 12vh;
  position: fixed;
  top: 0;
  padding: 0 6vw;
  background-color: #060606;
  gap: 1vw;
  button {
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: 8vh;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.4vw;
    background-color: #018792;
    color: #ffffff;
    cursor: pointer;
    z-index: 1;
    span {
      font-size: 2.4vh;
    }
  }
  input {
    width: 260px;
    height: 30px;

    background: #c4c4cc;

    border-radius: 5px;
  }
`;
