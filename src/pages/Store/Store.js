import AuthContext from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookDiv, MainStyle } from "../../assets/styles/styles";
import Header from "../../components/Header";
import { FiLogIn as LoginIcon } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import SearchingData from "./SearchingData";
import styled from "styled-components";
import plusIcon from "../../assets/images/plus.png";
import trashIcon from "../../assets/images/trash.png";

const dolarToReal = 5.39;

export default function Store() {
  const { user } = useContext(AuthContext);
  const [productsData, setProducts] = useState(null);
  const [productsSearch, setProdSearch] = useState("");
  const [cartItens, setCartItem] = useState([]);
  const navigate = useNavigate();

  function isThisInTheCart(productId) {
    if (cartItens.filter((item) => item._id === productId).length !== 0)
      return true;
    return false;
  }

  function addInTheCart(product) {
    const { title, image, price, _id } = product;
    setCartItem([...cartItens, { title, image, price, _id }]);
  }

  function removeFromTheCart(productId) {
    const filteredCart = cartItens.filter((item) => item._id !== productId);
    setCartItem(filteredCart);
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/products`, config)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [user]);

  if (productsData === null) return <SearchingData />;
 console.log(cartItens)
  return (
    <>
      <Header>
        <input
          placeholder="Pesquisar"
          value={productsSearch}
          onChange={(e) => setProdSearch(e.target.value.toLowerCase())}
        />
        {!user.token ? (
          <button onClick={() => navigate("/sign-in")}>
            <LoginIcon />
          </button>
        ) : (
          <button onClick={() => navigate("/profile")}>Perfil</button>
        )}
      </Header>
      <MainStyle>
        {productsData
          .filter((prod) => prod.ownerId !== user?.userId)
          .filter(
            (prod) =>
              prod.title.toLowerCase().includes(productsSearch) ||
              prod.genre.toLowerCase().includes(productsSearch) ||
              prod.author.toLowerCase().includes(productsSearch)
          )
          .map((product) => (
            <BookDiv key={product._id}>
              <img src={product.image} alt="book cover" />
              <h1>{product.title}</h1>
              <p>
                {`R$ ${(product.price * dolarToReal).toFixed(2)}`.replace(
                  ".",
                  ","
                )}
              </p>
              {isThisInTheCart(product._id) ? (
                <ButtonDiv>
                  <img src={trashIcon} alt="trash" onClick={() => removeFromTheCart(product._id)} />
                  <p>Remover do carrinho</p>
                </ButtonDiv>
              ) : (
                <ButtonDiv>
                  <img src={plusIcon} alt="add" onClick={() => addInTheCart(product)} />
                  <p>Adicionar ao carrinho</p>
                </ButtonDiv>
              )}
            </BookDiv>
          ))}
      </MainStyle>
    </>
  );
}

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0.5vw;
  display: flex;
  align-items: center;
  gap: 0.8vw;
  font-size: 1vw;

  img{
    width: 1.2vw;
    height: 1.2vw;
    cursor: pointer;
  }
`