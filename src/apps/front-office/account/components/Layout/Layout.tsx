import { Card, Wrapper } from "./style";
import { Container } from "apps/front-office/design-system/components/Grids";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Card>{children}</Card>
      </Container>
    </Wrapper>
  );
};

export default Layout;
