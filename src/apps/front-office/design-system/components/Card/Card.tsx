import { Container, Flex } from "../Grids";
import { Wrapper, StyledCard } from "./style";
import { H3, H4, P4 } from "../Typography";
import { trans } from "@mongez/localization";

const Card = ({ title, subtitle, children }) => {
  return (
    <Wrapper>
      <Container size="65rem">
        <Flex direction="column" className="title">
          <H4 weight="600">{trans(title)}</H4>
          <P4>{trans(subtitle)}</P4>
        </Flex>
        <StyledCard>{children}</StyledCard>
      </Container>
    </Wrapper>
  );
};

export default Card;
