import PropertyImages from './PropertyImages';
import PropertyCardDetails from './PropertyCardDetails';
import { Col, Grid } from '@mantine/core';
import ArrangeVisitForm from './ArrangeVisitForm';
import { ArrangeVisitWrapper } from './style';

const UnitOverviewTab = ({property}) => {
  return (
    <>
      <PropertyCardDetails property={property} />
      <ArrangeVisitWrapper>
        <Grid gutter={100}>
          <Col span={12} md={6} >
            <PropertyImages property={property} />
          </Col>
          <Col span={12} md={6} >
            <ArrangeVisitForm />
          </Col>
        </Grid>
      </ArrangeVisitWrapper>
    </>
  )
}

export default UnitOverviewTab