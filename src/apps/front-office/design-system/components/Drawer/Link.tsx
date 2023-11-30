import { Flex } from "../Grids";
import Button from "../Button";
import {
  ArrowIcon,
  SidebarLinesIcon,
} from "shared/assets/svgs";
import { P3, P4 } from "../Typography";
import { theme } from "../../utils/theme";
import { useState } from "react";

const Link = ({ link }) => {
  const [showChildren, setShowChildren] = useState(true);
  const onClickHandler = () => {
    setShowChildren(prevState => !prevState)
  }
  return (
    <>
      <Flex gap="26px">
        <Button noStyle to={link.url} className="menu--link">
          {/* {link.icon} */}
          <P3 weight="700" color={theme.colors.secondary[600]}>
            {link.text}
          </P3>
          {link.children && (
            <Button noStyle onClick={onClickHandler}>
              <ArrowIcon type={showChildren ? "top" : "bottom"}color={theme.colors.secondary[600]} />
            </Button>
          )}
        </Button>
      </Flex>
      {link.children && showChildren && (
        <Flex className="children--wrapper">
          <SidebarLinesIcon />
          <Flex className="menu--children" direction="column" gap="1.7rem">
            {link.children.map(child => (
              <Button
                noStyle
                onClick={() => (window.location.href = child.url)}
                className="menu-child--link">
                <P4 color="rgba(0, 26, 51, 0.56)">{child.text}</P4>
              </Button>
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Link;
