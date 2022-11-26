import { BookDiv, ButtonDiv } from "../assets/styles/styles";
import plusIcon from "../assets/images/plus.png";
import trashIcon from "../assets/images/trash.png";
import CartContext from "../contexts/CartContext";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Book({ product, owner }) {
  const dolarToReal = 5.39;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { isThisInTheCart, addInTheCart, removeFromTheCart } =
    useContext(CartContext);

  return (
    <BookDiv>
      <img
        src={product.image}
        alt="book cover"
        onClick={() => navigate(`product/${product._id}`)}
      />
      <h1>{product.title}</h1>
      <p>
        {`R$ ${(product.price * dolarToReal).toFixed(2)}`.replace(".", ",")}
      </p>

      {!user.token ? (
        <h2 onClick={() => navigate("/sign-in")}>faça login</h2>
      ) : owner ? (
        <></>
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
          <img
            src={plusIcon}
            alt="add"
            onClick={() => user.token && addInTheCart(product)}
          />
          <p>Adicionar ao carrinho</p>
        </ButtonDiv>
      )}
    </BookDiv>
  );
}
