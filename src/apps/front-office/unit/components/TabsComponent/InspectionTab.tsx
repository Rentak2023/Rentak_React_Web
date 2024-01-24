import PropertyImages from './PropertyImages';
import PropertyCardDetails from './PropertyCardDetails';
import { Col, Grid } from '@mantine/core';
import ArrangeVisitForm from './ArrangeVisitForm';
import { ArrangeVisitWrapper, InspectionWrapper } from './style';
import { H4 } from 'apps/front-office/design-system/components/Typography';
import { trans } from '@mongez/localization';

const InspectionTab = ({property}) => {
  return (
    <InspectionWrapper>
      <H4>{trans('unitInspections')}</H4>
    </InspectionWrapper>
  )
}

export default InspectionTab