import React, { useEffect, useState } from "react";
import { getFinishingTypes, getPropertyTypes } from "../../services/services";
import { H5 } from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import RadioInput from "apps/front-office/design-system/components/Form/RadioInput";
import { Flex } from "apps/front-office/design-system/components/Grids";
import CheckboxInput from "apps/front-office/design-system/components/Form/CheckboxInput";

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);

  const getPropertyTypesHandler = async () => {
    try {
      const response = await getPropertyTypes();
      setPropertyTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPropertyTypesHandler();
  }, []);

  return (
    <Flex direction="column" gap="32px">
      <H5>{trans("propertyType")}</H5>
      <Flex gap="44px" fullWidth flexWrap="wrap">
        {propertyTypes.map((type: any) => (
          <CheckboxInput
            key={type.id}
            name="property_type"
            value={type.id}
            label={type.type_name}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default PropertyTypes;
