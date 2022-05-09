import React, { useState } from "react";

import { Form } from "react-bootstrap";

import Button from "../Global/Button";

import styled from "styled-components";

export default function PasswordProtected({ children, password, title }) {
  const [verified, setVerified] = useState(false);

  if (!verified)
    return (
      <VerificationForm
        password={password}
        setVerified={setVerified}
        title={title}
      />
    );

  return <main>{children}</main>;
}

const VerificationForm = ({ setVerified, password, title }) => {
  const [value, setValue] = useState("");

  const [error, setError] = useState("");

  const onChange = (e) => {
    setError("");

    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (value == password) return setVerified(true);

    setError("Incorrect password, please try again");
  };

  return (
    <FormContainer>
      <OtherContainer>
        <FormHeader>
          <h1>{title}</h1>
          <p>Please enter the password below.</p>
        </FormHeader>

        <Form onSubmit={onSubmit}>
          <Form.Group
            onChange={onChange}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button>Go</Button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </Form>
      </OtherContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 60vh;

  display: flex;

  justify-content: center;

  align-items: center;

  * {
    width: 100%;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 3rem;
`;

const OtherContainer = styled.div`
  max-width: 300px;

  text-align: center;
`;
