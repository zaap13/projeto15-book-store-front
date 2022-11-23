import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { Main, Form, Logo, Text } from "../../assets/styles/styles";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert("Senhas diferentes");
      setLoading(false);
      return;
    }

    axios
      .post(`${BASE_URL}/sign-up`, {
        email,
        name,
        password,
      })
      .then(() => {
        setLoading(false);
        navigate("/sign-in");
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }

  return (
    <Main>
      <Logo>Store </Logo>

      <Form onSubmit={handleSignUp}>
        <input
          disabled={loading}
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          required
        />
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

        <input
          disabled={loading}
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button disabled={loading} type="submit">
          Cadastrar
        </button>
      </Form>
      <Link to={`/sign-in`}>
        <Text>Já tem uma conta? Faça login!</Text>
      </Link>
    </Main>
  );
}
