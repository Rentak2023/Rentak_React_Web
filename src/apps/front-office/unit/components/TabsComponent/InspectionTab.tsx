import PropertyImages from '../Unit/PropertyImages';
import PropertyCardDetails from './PropertyCardDetails';
import { Col, Grid } from '@mantine/core';
import {  InspectionCard, InspectionWrapper } from './style';
import { H4, P4 } from 'apps/front-office/design-system/components/Typography';
import { trans } from '@mongez/localization';
import { useEffect, useState } from 'react';
import { getInspection } from '../../services/services';

const InspectionTab = ({property}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inspection, setInspection] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const getInspectionHandler = async () => {
    setIsLoading(true);
    try {
      const response = await getInspection(property.id);
      setInspection(response.data)
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInspectionHandler();
  }, []);
  console.log(inspection)
  return (
    <InspectionWrapper>
      <H4>{trans('unitInspections')}</H4>
      <InspectionCard>
        {errorMessage && <P4>{errorMessage}</P4>}
      </InspectionCard>
    </InspectionWrapper>
  )
}

export default InspectionTab