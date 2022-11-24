import styled from "styled-components";
import trashIcon from "../../assets/images/trash.png";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import Header from "../../components/Header";
import { FiUser as UserIcon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Form } from "../../assets/styles/styles";

export default function CartPage() {
  const { cartItens, removeFromTheCart } = useContext(CartContext);
  const [requestForm, setForm] = useState({ address: "", zipCode: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const totalPrice = cartItens.reduce(
    (previous, current) => previous + current.price,
    0
  );

  function handleForm(e){
    setForm({...requestForm, [e.target.name]: e.target.value});
  }
  function submitRequest(e){
    e.preventDefault();
    setLoading(true);
  }

  return (
    <>
      <Header>
        <button onClick={() => navigate("/profile")}>
          <UserIcon />
          <span>Perfil</span>
        </button>
      </Header>
      <CartContainer>
        <h1>Dados da compra</h1>
        {cartItens.map((item) => (
          <CartItemDiv key={item._id} bold="false">
            <BookInfoStyle>
              <img src={item.image} alt="book cover" />
              {item.title}
            </BookInfoStyle>
            <p>
              {`$ ${(item.price).toFixed(2)}`.replace(".", ",")}
            </p>
            <TrashIconStyle>
              <img
                src={trashIcon}
                alt="trash"
                onClick={() => removeFromTheCart(item._id)}
                position="bottom"
              />
            </TrashIconStyle>
          </CartItemDiv>
        ))}
        <CartItemDiv bold="true">
          <h2>TOTAL</h2>
          <p>{`$ ${totalPrice.toFixed(2)}`.replace(".", ",")}</p>
        </CartItemDiv>
        <h1>Dados para entrega</h1>
        <Form onSubmit={submitRequest}>
          <input
            disabled={loading}
            name="address"
            placeholder="Endereço"
            onChange={handleForm}
            required
          />
          <input
            disabled={loading}
            name="zipCode"
            placeholder="CEP"
            onChange={handleForm}
            required
            pattern="\d{5}-\d{3}"
          />
          <button type="submit" disabled={loading}>
            Finalizar Pedido
          </button>
        </Form>
      </CartContainer>
    </>
  );
}

const CartContainer = styled.main`
  height: 88vh;
  display: flex;
  margin-top: 12vh;
  overflow-y: auto;
  align-items: center;
  flex-direction: column;
  background-color: #1b1b1b;
  h1 {
    font-size: 2vw;
    color: #ffffff;
    margin: 1vw 0;
  }
`;

const CartItemDiv = styled.div`
  background-color: #ffffff;
  font-weight: ${(props) => props.bold === "true" ? "700" : "400"};
  position: relative;
  width: 50vw;
  min-height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vw 4.5vw 0.5vw 0.5vw;
  border: 1px solid #1b1b1b;
  font-size: 1vw;
`;

const BookInfoStyle = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  gap: 1vw;
  img {
    height: 10vh;
  }
`;

const TrashIconStyle = styled.div`
  position: absolute;
  top: 0.5vw;
  right: 0.5vw;
  img {
    width: 1vw;
    height: 1vw;
    cursor: pointer;
  }
`;
