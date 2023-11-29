import { Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "apps/front-office/design-system/components/Button";
import Drawer from "apps/front-office/design-system/components/Drawer";
import { DrawerIcon } from "shared/assets/svgs";


export default function Icons() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group>
      <Button noStyle onClick={open}>
        <DrawerIcon />
      </Button>
      <Drawer opened={opened} close={close} />
    </Group>
  );
}
