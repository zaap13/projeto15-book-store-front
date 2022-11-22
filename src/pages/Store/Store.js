import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Main } from "../../assets/styles/styles";

export default function Store() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);

  return (
    <Main>
      <button onClick={() => navigate("/sign-in")}>
        <Title>Token - {user.token}</Title>
        <Title>UserId - {user.userId}</Title>
      </button>
    </Main>
  );
}
