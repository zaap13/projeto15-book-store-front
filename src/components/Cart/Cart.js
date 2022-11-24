import styled from "styled-components";
import { ButtonDiv } from "../../assets/styles/styles";
import closeIcon from "../../assets/images/close.png";
import trashIcon from "../../assets/images/trash.png";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

const dolarToReal = 5.39;

export default function Cart({ cartItens }) {
  const { setDisplayCart, removeFromTheCart } = useContext(CartContext);

  return (
    <CartContainer>
      <CloseIconStyle
        src={closeIcon}
        alt="close"
        onClick={() => setDisplayCart(false)}
        position="top"
      />
      {cartItens.map((item) => (
        <CartItemDiv key={item._id}>
          <img src={item.image} alt="book cover" />
          <h1>{item.title}</h1>
          <p>
            {`R$ ${(item.price * dolarToReal).toFixed(2)}`.replace(".", ",")}
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
    </CartContainer>
  );
}

const CartContainer = styled.div`
  height: 40vh;
  width: 20vw;
  background-color: #ffffff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  position: absolute;
  top: 12vh;
  right: 20vw;
  z-index: 2;
`;
const CartItemDiv = styled.div`
  position: relative;
  width: 20vw;
  height: 5vh;
  margin-top: 2vw;
  //border-radius: 1.4vw;
  display: flex;
  gap: 0.8vw;
  align-items: center;
  justify-content: space-between;
  padding: 1vw 0.5vw 0 0.5vw;
  font-size: 1vw;

  h1{
    font-size: 0.7vw;
  }

  > img {
    height: 8vh;
  }
`;

const CloseIconStyle = styled.img`
  top: 0.5vw;
  position: absolute;
  right: 0.5vw;
  width: 1vw;
  height: 1vw;
  cursor: pointer;
`;

const TrashIconStyle = styled.div`
  position: absolute;
  top: 0;
  left: 4.5vw;
  img {
    width: 1vw;
    height: 1vw;
    cursor: pointer;
  }
`;
