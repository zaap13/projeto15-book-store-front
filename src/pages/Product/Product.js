import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import AuthContext from "../../contexts/AuthContext";
import styled from "styled-components";
import { MainStyle, Title } from "../../assets/styles/styles";
import Header from "../../components/Header";
import { FiLogIn as LoginIcon } from "react-icons/fi";
import { FiUser as UserIcon } from "react-icons/fi";
import CartContext from "../../contexts/CartContext";
import { FiShoppingCart as CartIcon } from "react-icons/fi";

export default function Product() {
  const { user } = useContext(AuthContext);
  const { addInTheCart, isThisInTheCart, removeFromTheCart } =
    useContext(CartContext);
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  useEffect(() => {
    if (!checkForHexRegExp.test(id)) {
     return navigate("/");
    }
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then((res) => {
        setProduct(res.data);

      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [id]);

  return (
    <>
      <Header>
        {!user.token ? (
          <button onClick={() => navigate("/sign-in")}>
            <LoginIcon />
            <h4>Login</h4>
          </button>
        ) : (
          <button onClick={() => navigate("/profile")}>
            <UserIcon />
            <h4>Perfil</h4>
          </button>
        )}
      </Header>
      <MainStyle>
        <ProductBox>
          <>
            <Image src={product.image} alt="Imagem do livro" />
          </>
          <InfoBox>
            <Title>{product.title}</Title>

            <Description>{product.description}</Description>

            <p>Autor: {product.author}</p>

            <p>Gênero: {product.genre}</p>
            <p>Preço: R$ {product.price}</p>

            {!user.token ? (
              <button onClick={() => navigate("/sign-in")}>
                <LoginIcon /> Faça Login
              </button>
            ) : !isThisInTheCart(product._id) ? (
              <button
                onClick={() => {
                  addInTheCart(product);
                  navigate("/");
                }}
              >
                <CartIcon /> Adicionar ao carrinho
              </button>
            ) : (
              <button
                onClick={() => {
                  removeFromTheCart(product._id);
                  navigate("/");
                }}
              >
                <CartIcon /> Remover do carrinho
              </button>
            )}
          </InfoBox>
        </ProductBox>
      </MainStyle>
    </>
  );
}

const Image = styled.img`
  width: 30vw;
`;

const ProductBox = styled.div`
  display: flex;
  margin-top: 12vh;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 4vw;
  padding: 4vw;

  button {
    margin-top: 2vw;
    height: 4vw;
    width: 40vh;
    background-color: #ff8c00;
    color: #ffffff;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Description = styled.p`
  height: 100%;
  padding-top: 4vh;
`;
