import React from "react";
import { Container, Row } from "reactstrap";
import { Heading, LoginForm } from "../../components";

const LoginPage = () => {
  return (
    <Container style={{ paddingTop: "100px" }}>
      <Heading variant={2}>Welcome to MClimate</Heading>
      <Row xs="1" sm="2" style={{ justifyContent: "center" }}>
        <LoginForm />
      </Row>
    </Container>
  );
};

export default LoginPage;
