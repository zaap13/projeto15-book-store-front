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
  const { cartItens } = useContext(CartContext);
  function logout() {
    setAuth(false);
    setUser([]);
    navigate("/");
  }
  return (
    <HeaderStyle>
      <Logo onClick={() => navigate("/")}>
        <BookIcon /> <span>BookStore</span>
      </Logo>
      {children}

      {user.token && (
        <>
          <button onClick={() => navigate("/sale")}>
            <Add />
            <h4>Anunciar</h4>
          </button>
          <button onClick={() => navigate("/cart")}>
            <CartIcon />
            {cartItens.length > 0 && <div>{cartItens.length}</div>}
            <h4>Carrinho</h4>
          </button>
          <button onClick={logout}>
            <LogoutIcon />
            <h4>Sair</h4>
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
  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
  button {
    display: flex;
    flex-direction: column;
    position: relative;
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
    h4 {
      font-size: 2.4vh;
      @media (max-width: 768px) {
        display: none;
      }
    }
    div {
      position: absolute;
      height: 12px;
      width: 12px;
      padding-bottom: 3px;
      padding-right: 1px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      text-align: center;
      top: 18%;
      right: 18%;
      background-color: #ff8c00;
      font-weight: 700;
    }
  }
  input {
    width: 260px;
    height: 30px;

    background: #c4c4cc;

    border-radius: 5px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
