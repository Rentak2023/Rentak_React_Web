import React, { useRef, useState } from "react";
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
import { propertiesAtom } from "../../atoms";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import ReactGA from "react-ga";
import { getAllProperties } from "../../services/services";
import { filterMaxPrice, filterMinPrice } from "./helpers";
import cache from "@mongez/cache";

const SearchForm = () => {
  const [properties, setProperties] = propertiesAtom.useState();
  const formRef = useRef<any>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchHandler = async ({ values }) => {
    console.log(values);
    setIsSubmitting(true);
    const formattedValues = {
      price_from: Math.min(...values.price),
      price_to: Math.max(...values.price),
      ...values
    }
    
    try {
      const response : any = await getAllProperties(formattedValues);
      
      showNotification({
        message: response.data.message,
      });

      setProperties({ properties: response.data.items });

      ReactGA.event({
        category: "Search",
        action: "Search Success",
      });

    } catch (error: any) {
      ReactGA.event({
        category: "Search",
        action: "Search Failed",
      });
      if (error.response.data.message) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
      if(error.response.data.errors){
        Object.entries(error.response.data.errors).map(([key, value]: any) => {
          return showNotification({
            type: "danger",
            message: value[0],
          });
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
            <Flex justify="space-between" fullWidth className="flex search-and-reset">
              <Flex direction="column">
                <P4 color={theme.colors.grey[500]}>{trans("findPlace")}</P4>
                <SearchInput />
              </Flex>
              <Flex className="reset">
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
                <SubmitButton isSubmitting={isSubmitting}>
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
