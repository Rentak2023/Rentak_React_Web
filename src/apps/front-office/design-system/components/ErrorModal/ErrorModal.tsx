import React from "react";
import { Modal } from "@mantine/core";
import { Flex } from "../Grids";
import Button from "../Button";
import { CloseModalIcon, ErrorIcon, SuccessIcon } from "shared/assets/svgs";
import { Wrapper } from "./style";
import { H4, P1 } from "../Typography";
import { trans } from "@mongez/localization";
import { theme } from "../../utils/theme";

const ErrorModal = ({ opened, close }) => {
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
          <ErrorIcon />
          <H4 color={theme.colors.error[300]}>{trans("error")}!</H4>
          <P1 color={theme.colors.grey[600]}>
            {trans("formWasFailed")}
          </P1>
        </Flex>
      </Wrapper>
    </Modal>
  );
};

export default ErrorModal;
