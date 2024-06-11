import { Wrapper, StyledCard } from "./style";
import { trans } from "@mongez/localization";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { H4, P4 } from "apps/front-office/design-system/components/Typography";
import React from "react";

const Card = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <Container size="65rem">
        <Flex direction="column" className="title">
          <H4 weight="600">{trans(title)}</H4>
          {subtitle && <P4>{trans(subtitle)}</P4>}
        </Flex>
        <StyledCard>{children}</StyledCard>
      </Container>
    </Wrapper>
  );
};

export default Card;
