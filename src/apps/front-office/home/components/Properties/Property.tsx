import React from "react";
import {
  PropertyWrapper,
  DescriptionWrapper,
  PropertyType,
  Rate,
} from "./style";
import {
  H4,
  P1,
  P2,
  P3,
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { Bathtub, BedIcon, SpaceIcon, StarIcon } from "shared/assets/svgs";
import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import URLS from "apps/front-office/utils/urls";
const Property = ({ property }) => {
  const items = [
    {
      icon: <BedIcon />,
      text: property.room_numbers,
    },
    {
      icon: <Bathtub />,
      text: property.bathrom_numbers,
    },
    {
      icon: <SpaceIcon />,
      text: property.area,
    },
  ];

  return (
    <PropertyWrapper image={property.picture}>
      <Flex justify="end" fullWidth>
        <Rate>
          <StarIcon />
          <P3 color="#262729" lineHeight="125%">
            4.5
          </P3>
        </Rate>
      </Flex>
      <DescriptionWrapper>
        <Flex justify="end" fullWidth>
          {property.property_type.type_name && (
            <PropertyType>
              <P3 weight="500">{property.property_type.type_name}</P3>
            </PropertyType>
          )}
        </Flex>
        <Flex direction="column">
          <a href={URLS.property(property)}>
            <H4 weight="500">{property.property_name}</H4>
          </a>
          <P4 weight="400">{property.location.city_name}</P4>
        </Flex>
        <Flex gap="26px" className="description">
          {items.map(item => (
            <Flex align="center" gap="8px">
              {item.icon}
              <Small>{item.text}</Small>
            </Flex>
          ))}
        </Flex>
        <Flex align="center">
          <H4 weight="400" color={theme.colors.secondary[400]}>
            {property.price} EGP{" "}
          </H4>
          <P2 color={theme.colors.secondary[400]}>/{trans("perMonth")}</P2>
        </Flex>
      </DescriptionWrapper>
    </PropertyWrapper>
  );
};

export default Property;
