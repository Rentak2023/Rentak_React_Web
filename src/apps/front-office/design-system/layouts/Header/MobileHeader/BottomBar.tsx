import { Drawer } from "@mantine/core";
import { useState } from "react";

import {
  DrawerWrapper,
} from "./style";
import Icons from "../Icons";

export default function BottomBar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        size="xl"
      >
        <DrawerWrapper>
         <Icons />
        </DrawerWrapper>
      </Drawer>
    </>
  );
}
