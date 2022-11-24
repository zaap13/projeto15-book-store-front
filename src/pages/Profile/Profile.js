import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import Book from "../../components/Book";

import axios from "axios";
import { Title, MainStyle, BooksBox, Text } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";
import Header from "../../components/Header";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data.user);
        setProducts(res.data.products);
        console.log(res.data.user, res.data.products, user.token);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [user]);
  return (
    <>
      <Header></Header>
      <MainStyle>
        <Title>Olá, {userInfo.name}!</Title>
        <Text>Seus anúncios:</Text>
        <BooksBox>
          {products.map((product) => (
            <Book key={product._id} product={product} owner={true}></Book>
          ))}
        </BooksBox>
      </MainStyle>
    </>
  );
}
