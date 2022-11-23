import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  Title,
  Logo,
  HeaderStyle,
  MainStyle,
} from "../../assets/styles/styles";
import {
  FiShoppingCart as CartIcon,
  FiLogOut as LogoutIcon,
} from "react-icons/fi";
import { BASE_URL } from "../../constants/url";

export default function Profile() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
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
        console.log(res.data.user, res.data.products);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [user]);
  return (
    <>
      <HeaderStyle>
        <Logo>BookStore</Logo>
        <input placeholder="Pesquisar" />

        <button>
          <CartIcon />
        </button>
        <button>
          <LogoutIcon />
        </button>
      </HeaderStyle>
      <MainStyle>
        <button onClick={() => navigate("/sign-in")}>
          <Title>{userInfo.name}</Title>
          <Title>{products}</Title>
        </button>
      </MainStyle>
    </>
  );
}
