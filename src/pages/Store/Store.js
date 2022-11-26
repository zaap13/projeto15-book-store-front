import AuthContext from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BooksBox, MainStyle } from "../../assets/styles/styles";
import Header from "../../components/Header";
import { FiLogIn as LoginIcon } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import SearchingData from "./SearchingData";
import Book from "../../components/Book";
import { FiUser as UserIcon } from "react-icons/fi";

export default function Store() {
  const { user } = useContext(AuthContext);
  const [productsData, setProducts] = useState(null);
  const [productsSearch, setProdSearch] = useState("");
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
        <BooksBox>
          {productsData
            .filter((prod) => prod.ownerId !== user?.userId)
            .filter(
              (prod) =>
                prod.title.toLowerCase().includes(productsSearch) ||
                prod.genre.toLowerCase().includes(productsSearch) ||
                prod.author.toLowerCase().includes(productsSearch)
            )
            .map((product) => (
              <Book key={product._id} product={product} owner={false}></Book>
            ))}
        </BooksBox>
      </MainStyle>
    </>
  );
}
