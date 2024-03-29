import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  display: flex;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const ImageBackground = styled.img`
  height: 963px;
  width: 50%;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 150px;
`;

const Input = styled.input`
  margin: 20px 0 0 32%;
  padding: 0 30px 0 30px;
  height: 65px;
  width: 285px;
  font-size: 23px;
  border: 1px solid #bec3cc;
`;

const Connect = styled.button`
  margin: 20px 0 0 32%;
  font-size: 23px;
  height: 65px;
  width: 345px;
  background: black;
  color: white;
  &:disabled {
    color: black;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [email, setEmail] = useState();
  const [pwd, setPassword] = useState();
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {email, pwd})
  };

  return (
    <Container>
      <Form>
        <Input
          type="email"
          placeholder="Votre email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Connect onClick={handleLogin} disabled={isFetching}>
          SE CONNECTER
        </Connect>
      </Form>
    </Container>
  );
};

export default Login;
