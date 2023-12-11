import { useForm } from "@mongez/react-form";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { SubmitButtonWrapper } from "./styles";

type SubmitButtonProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export default function SubmitButton({
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <SubmitButtonWrapper>
      <Button
        type="submit"
        loading={props.isSubmitting}
        disabled={props.isDisabled}
        {...props}
      >
        {children}
      </Button>
    </SubmitButtonWrapper>
  );
}
