import React from "react";
import { Modal } from "@mantine/core";

import { CloseModalIcon, SuccessIcon } from "shared/assets/svgs";
import { Flex } from "apps/front-office/design-system/components/Grids";
import Button from "apps/front-office/design-system/components/Button";

const LoginTypeModal = ({ opened, close }) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      size="xl">
      <Flex justify="end" fullWidth>
        <Button noStyle onClick={close}>
          <CloseModalIcon />
        </Button>
      </Flex>

    </Modal>
  );
};

export default LoginTypeModal;
