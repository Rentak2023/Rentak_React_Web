import PropertyCardDetails from "./PropertyCardDetails";

const UnitOverviewTab = ({ property }) => {
  return (
    <>
      {/* <ArrangeVisitWrapper>
        <Grid gutter={100}>
          <Col span={12} md={6}>
            <PropertyImages property={property} />
          </Col>
          <Col span={12} md={6}>
            <ArrangeVisitForm property={property} />
          </Col>
        </Grid>
      </ArrangeVisitWrapper> */}
      <PropertyCardDetails property={property} />
    </>
  );
};

export default UnitOverviewTab;
