import React from "react";
import { CardWrapper, IconWrapper } from "../style";
import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  H5,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import {
  AreaIcon,
  BedIcon,
  LocationIcon,
  ShowerIcon,
  StatusIcon,
  TypeIcon,
} from "shared/assets/svgs";
import { trans } from "@mongez/localization";

const PropertyCardDetails = ({ property }) => {
  console.log(property);
  const bedroom = property.rooms?.find(room => (room.room_name === "Bedroom"));
  const bathroom = property.rooms?.find(room => (room.room_name === "Bathroom"));
  const detailsList = [
    {
      icon: <LocationIcon />,
      text: trans("location"),
      detail: property?.location?.address_in_detail,
    },
    {
      icon: <StatusIcon />,
      text: trans("status"),
      detail: trans("availableNow"),
    },
    {
      icon: <BedIcon />,
      text: trans("rooms"),
      detail: bedroom !== undefined ? bedroom.num_of_rooms : 0,
    },
    {
      icon: <ShowerIcon />,
      text: trans("toilets"),
      detail: bathroom !== undefined ? bathroom.num_of_rooms : 0,
    },
    {
      icon: <AreaIcon />,
      text: trans("m2"),
      detail: property?.area,
    },
    {
      icon: <TypeIcon />,
      text: trans("finishType"),
      detail: property?.finish_type?.type_name,
    },
  ];

  return (
    <>
      <CardWrapper>
        <Flex direction="column" gap="52px" fullWidth>
          <Flex justify="space-between" fullWidth>
            <H5 weight="600">{property.property_name}</H5>
            <H5 weight="600" color={theme.colors.primaryColor}>
              {property.price} EGP
            </H5>
          </Flex>
          <Flex justify="space-between" fullWidth flexWrap="wrap" gap="20px">
            {detailsList.map(detail => (
              <Flex gap="15px">
                <IconWrapper>{detail.icon}</IconWrapper>
                <Flex direction="column">
                  <Small weight="600">{detail.text}</Small>
                  <Small weight="400">{detail.detail}</Small>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <H5 weight="600">{trans("propertyDetails")}</H5>
          <Flex justify="space-between" fullWidth flexWrap="wrap" gap="20px">
            <Flex direction="column">
              <Small weight="600">{trans("propertyId")}</Small>
              <Small weight="400">{property?.id}</Small>
            </Flex>
            <Flex direction="column">
              <Small weight="600">{trans("propertyStatus")}</Small>
              <Small weight="400" color={theme.colors.success[200]}>
                {trans("availableNow")}
              </Small>
            </Flex>
            {property?.property_type?.type_name && (
              <Flex direction="column">
                <Small weight="600">{trans("propertyType")}</Small>
                <Small weight="400">{property?.property_type?.type_name}</Small>
              </Flex>
            )}
            <Flex direction="column">
              <Small weight="600">{trans("propertySize")}</Small>
              <Small weight="400">
                {property?.area} {trans("m2")}
              </Small>
            </Flex>
            <Flex direction="column">
              <Small weight="600">{trans("rooms")}</Small>
              <Small weight="400">{bedroom !== undefined ? bedroom.num_of_rooms : 0}</Small>
            </Flex>
            <Flex direction="column">
              <Small weight="600">{trans("toilets")}</Small>
              <Small weight="400">{bathroom !== undefined ? bathroom.num_of_rooms : 0}</Small>
            </Flex>
          </Flex>
        </Flex>
      </CardWrapper>
    </>
  );
};

export default PropertyCardDetails;
