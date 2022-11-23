import { HeaderStyle, Logo } from "../assets/styles/styles";
import {
  FiShoppingCart as CartIcon,
  FiLogOut as LogoutIcon,
} from "react-icons/fi";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header({ children }) {
  const { user, setAuth, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  function logout() {
    setAuth(false);
    setUser([]);
    navigate("/");
  }
  return (
    <HeaderStyle>
      <Logo>BookStore</Logo>
      <input placeholder="Pesquisar" />

      <button>
        <CartIcon />
      </button>
      {children}
      {user.token && (
        <button onClick={logout}>
          <LogoutIcon />
        </button>
      )}
    </HeaderStyle>
  );
}
