import {
  PropertyWrapper,
  DescriptionWrapper,
  PropertyType,
  Rate,
} from "./style";
import {
  H4,
  P3,
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  AreaIcon,
  PropertyWhatsappIcon,
  BedIcon,
  LocationIcon,
  PropertyPhoneIcon,
  ShowerIcon,
  StarIcon,
} from "shared/assets/svgs";
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
      icon: <ShowerIcon />,
      text: property.bathrom_numbers,
    },
    {
      icon: <AreaIcon />,
      text: property.area,
    },
  ];

  const socialMedia = [
    {
      url: "tel:+201111111541",
      icon: <PropertyPhoneIcon />,
    },
    {
      url: "https://wa.me/+201111111541",
      icon: <PropertyWhatsappIcon />,
    },
  ];

  return (
    <a href={URLS.property(property)}>
      <PropertyWrapper image={property.picture}>
        <img src={property.picture} />
        <DescriptionWrapper>
          <Flex
            justify={property.property_type.type_name ? "space-between" : "end"}
            fullWidth>
            {property.property_type.type_name && (
              <PropertyType>
                <P3 weight="500">{property.property_type.type_name}</P3>
              </PropertyType>
            )}
            <Rate>
              <StarIcon />
              <P3 color="#262729" lineHeight="125%">
                4.5
              </P3>
            </Rate>
          </Flex>
          <Flex align="baseline" gap="0.5rem">
            <H4 weight="600" color={theme.colors.secondary[400]}>
              {property.price}
            </H4>
            <P4 color={theme.colors.secondary[400]}>
              EGP / {trans("perMonth")}
            </P4>
          </Flex>
          <Flex align="center" gap="0.5rem">
            <LocationIcon />
            <Small className="address">{property.location.address_in_detail}</Small>
          </Flex>
          <div className="description">
            <Small>
              {trans("listed")} {property.ago}
            </Small>
            <Flex fullWidth justify="space-between">
              <Flex gap="26px">
                {items.map(item => (
                  <Flex align="center" gap="8px">
                    {item.icon}
                    <Small>{item.text}</Small>
                  </Flex>
                ))}
              </Flex>
              <Flex gap="12px">
                {socialMedia.map(social => (
                  <a href={social.url}>{social.icon}</a>
                ))}
              </Flex>
            </Flex>
          </div>
        </DescriptionWrapper>
      </PropertyWrapper>
    </a>
  );
};

export default Property;
