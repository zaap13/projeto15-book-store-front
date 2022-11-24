import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { Main, Form, Logo, Text } from "../../assets/styles/styles";
import AuthContext from "../../contexts/AuthContext";

export default function Sale() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function handleSale(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        `${BASE_URL}/products`,
        {
          title,
          image,
          price,
          description,
          author,
          genre,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(() => {
        setLoading(false);
        navigate("/profile");
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }

  return (
    <Main>
      <Logo>Crie seu anúncio: </Logo>

      <Form onSubmit={handleSale}>
        <input
          disabled={loading}
          type="text"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="URL da imagem"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="Preço"
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="Autor"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="Gênero"
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <button disabled={loading} type="submit">
          Anunciar
        </button>
      </Form>
      <Link to={`/profile`}>
        <Text>Voltar para o perfil</Text>
      </Link>
    </Main>
  );
}
