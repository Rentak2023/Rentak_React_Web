import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import TabsComponent from "../TabsComponent";
import ContactUs from "apps/front-office/design-system/components/ContactUs";
import { getProperty } from "../../services/services";
import Loader from "apps/front-office/design-system/components/Loader";
import { ArrangeVisitWrapper } from "./style";
import { Grid } from "@mantine/core";
import { Col, Container } from "apps/front-office/design-system/components/Grids";
import PropertyImages from "./PropertyImages";
import ArrangeVisitForm from "./ArrangeVisitForm";

function UnitPage({ params }) {
  const unitId = params.id;
  const [isLoading, setIsLoading] = useState(false);
  const [property, setProperty] = useState({});

  const getPropertyHandler = async () => {
    setIsLoading(true);
    try {
      const response = await getProperty({id: unitId});
      setProperty(response.data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPropertyHandler();
  }, []);

  useEffect(() => {
    ReactGA.event({
      category: "Units",
      action: "Unit Page Opened",
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet title={trans("unit")} />
      <Container>
        <ArrangeVisitWrapper>
          <Grid gutter={100}>
            <Col span={12} md={6}>
              <PropertyImages property={property} />
            </Col>
            <Col span={12} md={6}>
              <ArrangeVisitForm property={property} />
            </Col>
          </Grid>
        </ArrangeVisitWrapper>
      </Container>
      <TabsComponent property={property} />
      {/* <ContactUs /> */}
    </>
  );
}

export default UnitPage;
