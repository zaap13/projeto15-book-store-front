import AuthContext from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainStyle } from "../../assets/styles/styles";
import Header from "../../components/Header";
import { FiLogIn as LoginIcon } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import SearchingData from "./SearchingData";
import styled from "styled-components";

const dolarToReal = 5.39;

export default function Store() {
  const { user } = useContext(AuthContext);
  const [productsData, setProducts] = useState(null);
  const navigate = useNavigate();

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

  //const productsSearch = 

  return (
    <>
      <Header>
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
          .map((product) => (
            <BookDiv key={product._id}>
              <img src={product.image} alt="book cover" />
              <h1>{product.title}</h1>
              <p>{`R$ ${(product.price * dolarToReal).toFixed(2)}`.replace('.', ',')}</p>
            </BookDiv>
          ))}
      </MainStyle>
    </>
  );
}

const BookDiv = styled.div`
  width: 15vw;
  height: 25vw;
  background-color: #ffffff;
  border-radius: 1.4vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  justify-content: center;
  align-items: center;
  padding: 2vw 0;
  
  img{
    width: 10vw;
  }

  h1{
    text-align: center;
  }
`;
