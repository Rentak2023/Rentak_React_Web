import React from "react";
import { Modal } from "@mantine/core";
import { Flex } from "../Grids";
import Button from "../Button";
import { CloseModalIcon, SuccessIcon } from "shared/assets/svgs";
import { Wrapper } from "./style";
import { H4, P1 } from "../Typography";
import { trans } from "@mongez/localization";
import { theme } from "../../utils/theme";

const SuccessModal = ({ opened, close }) => {
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
      <Wrapper>
        <Flex direction="column" justify="center" align="center" fullWidth>
          <SuccessIcon />
          <H4 color={theme.colors.success[300]}>{trans("success")}!</H4>
          <P1 color={theme.colors.grey[600]}>
            {trans("formWasSuccessfullySubmitted")}
          </P1>
        </Flex>
      </Wrapper>
    </Modal>
  );
};

export default SuccessModal;
