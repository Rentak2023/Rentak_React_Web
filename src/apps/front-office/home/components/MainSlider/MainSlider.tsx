import { ContentWrapper, MainSliderWrapper } from "./style";
import bg from "assets/images/mainSlider.png";
import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import { H1, P4 } from "apps/front-office/design-system/components/Typography";
import { Container } from "apps/front-office/design-system/components/Grids";

const MainSlider = () => {
  return (
    <MainSliderWrapper>
      <img src={bg} />
      <Container>
        <ContentWrapper>
          <H1 color={theme.colors.secondary[500]} length={45}>{trans("mainSliderTitle")}</H1>
          <P4 color={theme.colors.secondary[400]} weight="600">
            {trans("mainSliderDesc")}
          </P4>
        </ContentWrapper>
      </Container>
    </MainSliderWrapper>
  );
};

export default MainSlider;
