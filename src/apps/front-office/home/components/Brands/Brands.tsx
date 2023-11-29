import React from "react";
import BrandsSlider from "./BrandsSlider";
import { Container } from "apps/front-office/design-system/components/Grids";
import { BrandsWrapper } from "./style";

const brands = [1, 2, 3, 4, 5, 6, 7];

const Brands = () => {
  return (
    <Container>
      <BrandsWrapper>
        <BrandsSlider brands={brands} />
      </BrandsWrapper>
    </Container>
  );
};

export default Brands;
