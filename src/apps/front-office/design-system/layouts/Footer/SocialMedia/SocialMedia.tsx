import { trans } from "@mongez/localization";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { Logo } from "apps/front-office/design-system/components/Logo";
import { P4 } from "apps/front-office/design-system/components/Typography";
import Button from "apps/front-office/design-system/components/Button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "shared/assets/svgs";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      url: "https://www.facebook.com/Rentakapp/",
      icon: <FacebookIcon />,
    },
    // {
    //   url: "",
    //   icon: <TwitterIcon />,
    // },
    {
      url: "https://www.linkedin.com/company/rentak-app/",
      icon: <LinkedinIcon />,
    },
    {
      url: "https://www.instagram.com/rentakapp/",
      icon: <InstagramIcon />,
    },
  ];
  return (
    <Flex direction="column" gap="31px">
      <Logo />
      {/* <P4>{trans("footerDesc")}</P4> */}

      <Flex gap="54px" align="center" justify="center">
        {socialMediaLinks.map(link => (
          <Button noStyle key={link.url}>
            <a href={link.url} target="_blank">
              {link.icon}
            </a>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default SocialMedia;
