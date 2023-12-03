import { trans } from "@mongez/localization";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { Logo } from "apps/front-office/design-system/components/Logo";
import { P4 } from "apps/front-office/design-system/components/Typography";
import Button from "apps/front-office/design-system/components/Button";
import { ContactUsIcon } from "shared/assets/svgs";
import { Link } from "@mongez/react-router";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      url: "https://www.facebook.com/Rentakapp/",
      icon: <ContactUsIcon type="facebook" />,
    },
    {
      url: "https://www.instagram.com/rentakapp/",
      icon: <ContactUsIcon type="instagram" />,
    },
    {
      url: "https://wa.me/+201111111541",
      icon: <ContactUsIcon type="whatsapp" />,
    },
    {
      url: "tel:+201111111541",
      icon: <ContactUsIcon type="phone" />,
    },
  ];
  return (
    <Flex gap="54px" align="center" justify="center" fullWidth className="social--media">
      {socialMediaLinks.map(link => (
        <a href={link.url} target="_blank">
          {link.icon}
        </a>
      ))}
    </Flex>
  );
};

export default SocialMedia;
