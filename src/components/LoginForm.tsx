import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = () => {
  return (
    <Form
      style={{
        paddingTop: "100px",
      }}
    >
      <FormGroup>
        <Label size="lg" for="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="email@provider.com"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label size="lg" for="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Your strong password"
          type="password"
        />
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
