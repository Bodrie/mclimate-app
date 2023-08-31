import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { login } from "../store/UserSlice";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { LoginReqBody } from "../types";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const initialUserCredentials: LoginReqBody = {
    client_id: "",
    client_secret: "",
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const handleLoginFormInput = (field: string, value: string) => {
    setUserCredentials({ ...userCredentials, [field]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(userCredentials));
  };

  useEffect(() => {
    if (user.user !== null && !user.loading) navigate("/home");
  }, [user]);

  return (
    <Form
      onSubmit={handleLogin}
      style={{
        paddingTop: "100px",
      }}
    >
      <FormGroup>
        <Label size="lg" for="client_id">
          Client ID 62419ac553304
        </Label>

        <Input
          id="client_id"
          name="client_id"
          placeholder="Client id..."
          type="text"
          value={userCredentials.client_id}
          onChange={(e) => handleLoginFormInput("client_id", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label size="lg" for="secret">
          Client Secret 62419ac553269
        </Label>
        <Input
          id="secret"
          name="secret"
          placeholder="Client secret..."
          type="text"
          value={userCredentials.client_secret}
          onChange={(e) =>
            handleLoginFormInput("client_secret", e.target.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label size="lg" for="email">
          Email interview@mclimate.eu
        </Label>

        <Input
          id="email"
          name="email"
          placeholder="email@provider.com"
          type="email"
          value={userCredentials.username}
          onChange={(e) => handleLoginFormInput("username", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label size="lg" for="password">
          Password interview_mclimate
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Your strong password"
          type="password"
          value={userCredentials.password}
          onChange={(e) => handleLoginFormInput("password", e.target.value)}
        />
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
