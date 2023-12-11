import React from "react";
import { Card, Wrapper } from "./style";
import { Container } from "../Grids";

const PageHeader = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Card>{children}</Card>
      </Container>
    </Wrapper>
  );
};

export default PageHeader;
