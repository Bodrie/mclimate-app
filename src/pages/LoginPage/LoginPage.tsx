import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Container, Row } from "reactstrap";

const LoginPage = () => {
  return (
    <Container>
      <Row xs="1" sm="2" style={{ justifyContent: "center" }}>
        <LoginForm />
      </Row>
    </Container>
  );
};

export default LoginPage;
