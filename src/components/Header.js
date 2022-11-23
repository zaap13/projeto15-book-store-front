import { HeaderStyle, Logo } from "../assets/styles/styles";
import { FiShoppingCart as CartIcon } from "react-icons/fi";

export default function Header({ children }) {
  return (
    <HeaderStyle>
      <Logo>BookStore</Logo>
      <input placeholder="Pesquisar" />

      <button>
        <CartIcon />
      </button>
      {children}
    </HeaderStyle>
  );
}