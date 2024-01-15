import React, { useEffect, useState } from 'react'
import { getFinishingTypes } from '../../services/services';
import { H5 } from 'apps/front-office/design-system/components/Typography';
import { trans } from '@mongez/localization';
import RadioInput from 'apps/front-office/design-system/components/Form/RadioInput';
import { Flex } from 'apps/front-office/design-system/components/Grids';

const FinishingTypes = () => {
  const [finishingTypes, setFinishingTypes] = useState([]);

  const getFinishingTypesHandler = async () => {
    try {
      const response = await getFinishingTypes();
      setFinishingTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFinishingTypesHandler();
  }, []);
  return (
    <Flex direction='column' gap="32px">
      <H5>{trans('finishingTypes')}</H5>
      <Flex gap="44px" fullWidth>
        {finishingTypes.map((type: any) => (
          <RadioInput key={type.id} name="" label={type.type_name} />
        ))}
      </Flex>
    </Flex>
  )
}

export default FinishingTypes