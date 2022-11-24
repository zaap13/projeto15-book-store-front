import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { Main, Form, Logo, Text } from "../../assets/styles/styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/sign-in`, {
        email,
        password,
      })
      .then((res) => {
        setAuth(true);
        setUser(res.data);
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }
  return (
    <Main>
      <Logo>BookStore </Logo>
      <Form onSubmit={handleSignIn}>
        <input
          disabled={loading}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          Entrar
        </button>
      </Form>
      <Link to={`/sign-up`}>
        <Text>Primeira vez? Cadastre-se!</Text>
      </Link>
      <Link to={`/`}>
        <Text>Voltar para a Home</Text>
      </Link>
    </Main>
  );
}
