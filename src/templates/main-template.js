import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

export const MainTemplate = ({ title, children }) => (
  <Wrapper bg="dark" text="white">
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <CardBody>{children}</CardBody>
  </Wrapper>
);

const Wrapper = styled(Card)`
  width: 80%;
  max-width: 600px;
  margin: auto;
`;
const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
`;