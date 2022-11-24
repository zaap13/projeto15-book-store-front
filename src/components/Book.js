import { BookDiv, ButtonDiv } from "../assets/styles/styles";
import plusIcon from "../assets/images/plus.png";
import trashIcon from "../assets/images/trash.png";
import CartContext from "../contexts/CartContext";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";

export default function Book({ product, owner }) {
  const dolarToReal = 5.39;

  const { user } = useContext(AuthContext);
  const { isThisInTheCart, addInTheCart, removeFromTheCart } =
    useContext(CartContext);

  return (
    <BookDiv>
      <img src={product.image} alt="book cover" />
      <h1>{product.title}</h1>
      <p>
        {`R$ ${(product.price * dolarToReal).toFixed(2)}`.replace(".", ",")}
      </p>
      {owner ? (
        <p>Editar / Deletar</p> //implementar
      ) : isThisInTheCart(product._id) ? (
        <ButtonDiv>
          <img
            src={trashIcon}
            alt="trash"
            onClick={() => removeFromTheCart(product._id)}
          />
          <p>Remover do carrinho</p>
        </ButtonDiv>
      ) : (
        <ButtonDiv>
          <img src={plusIcon} alt="add" onClick={() => user.token && addInTheCart(product)} />
          <p>Adicionar ao carrinho</p>
        </ButtonDiv>
      )}
    </BookDiv>
  );
}
