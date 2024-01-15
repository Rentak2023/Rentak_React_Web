import React, { useRef } from "react";
import { FormCard, FormWrapper } from "./style";
import { Form } from "@mongez/react-form";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { Line } from "apps/front-office/design-system/components/Shapes/Line";
import FinishingTypes from "./FinishingTypes";
import CityAndDistricts from "./CityAndDistricts";
import PropertyTypes from "./PropertyTypes";
import RoomsAndToilets from "./RoomsAndToilts";
import PriceRange from "./PriceRange";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import { trans } from "@mongez/localization";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import SearchInput from "./SearchInput";
import Button from "apps/front-office/design-system/components/Button";
import { ResetIcon } from "shared/assets/svgs";

const SearchForm = () => {
  const formRef = useRef<any>();

  const searchHandler = ({ values }) => {
    console.log(values);
  };

  const resetFormHandler = () => {
    const form = formRef.current as Form;

    form.reset();
  }
  return (
    <FormWrapper>
      <Container>
        <Form onSubmit={searchHandler} ref={formRef}>
          <FormCard>
            <Flex justify="space-between" fullWidth>
              <Flex direction="column">
                <P4 color={theme.colors.grey[500]}>{trans("findPlace")}</P4>
                <SearchInput />
              </Flex>
              <Flex>
                <Button noStyle onClick={resetFormHandler}>
                  <Flex align="center">
                    <ResetIcon /> <P4>{trans("resetOptions")}</P4>
                  </Flex>
                </Button>
              </Flex>
            </Flex>
            <Line margin="57px 0" />
            <Flex gap="57px" direction="column" fullWidth>
              <CityAndDistricts />
              <FinishingTypes />
              <PropertyTypes />
              <RoomsAndToilets />
              <PriceRange />
              <Flex justify="end" fullWidth>
                <SubmitButton>
                  <P4
                    color={theme.colors.white}
                    style={{ textTransform: "uppercase" }}>
                    {trans("search")}
                  </P4>
                </SubmitButton>
              </Flex>
            </Flex>
          </FormCard>
        </Form>
      </Container>
    </FormWrapper>
  );
};

export default SearchForm;
