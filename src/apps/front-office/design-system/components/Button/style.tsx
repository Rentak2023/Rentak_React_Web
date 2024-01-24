import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button as MantineButton } from "@mantine/core";
import { ButtonProps } from "./type";
import { theme } from "../../utils/theme";
import devices from "../../utils/devices";

export const BaseButton = styled(MantineButton)`
  padding: 0 15px;
  color: ${theme.colors.white};
  background: ${theme.colors.secondary[500]};
  border-color: ${theme.colors.secondary[500]};
  &:hover {
    background-color: ${theme.colors.secondary[500]};
    opacity: 0.8;
    ${({ variant }: ButtonProps) => {
      return (
        variant == "primary" &&
        css`
          border: 1px solid ${theme.colors.primaryColor};
          background-color: ${theme.colors.primaryColor};
        `
      );
    }}
  }
  ${({ color }: ButtonProps) => {
      return (
        color &&
        css`
          border: 1px solid ${color};
          background-color: ${color};
        `
      );
    }}
  ${({ radius }: ButtonProps) => {
    return (
      !radius &&
      css`
        border-radius: 4px;
      `
    );
  }}
  ${({ size }: ButtonProps) => {
    return (
      !size &&
      css`
        min-height: 40px;
      `
    );
  }}
  font-weight: normal;

  transition: 0.2s ease-in-out;
  ${({ variant, color }: ButtonProps) => {
    return (
      variant == "outline" &&
      css`
        border: 1px solid ${color ?? theme.colors.secondary[600]};
        background-color: ${theme.colors.white};
        p{
          color: ${color ?? theme.colors.secondary[600]};
        }
      `
    );
  }}
  ${({ variant, color }: ButtonProps) => {
    return (
      variant == "primary" &&
      css`
        border: 1px solid ${color ?? theme.colors.primaryColor};
        background-color: ${color ?? theme.colors.primaryColor};
        color: ${theme.colors.white};
      `
    );
  }}
  ${({ variant, color }: ButtonProps) => {
    return (
      variant == "contract" &&
      css`
        background-color: ${color ?? theme.colors.secondary[400]};
        color: ${theme.colors.white};
        height: auto;
        width: 100%;
        border-radius: 10.842px;
        padding: 28.912px;
        p{
          text-transform: uppercase;
        }
      `
    );
  }}
  ${({ rounded }: ButtonProps) => {
    return (
      rounded &&
      css`
        border-radius: 100px;
      `
    );
  }}

  &:hover {
    ${({ variant }: ButtonProps) => {
      return (
        variant == "outline" &&
        css`
          color: ${theme.colors.white};
          background: ${theme.colors.secondary[600]};
          p{
            color: ${theme.colors.white};
          }
        `
      );
    }}
  }
  ${({ noStyle }: ButtonProps) => {
    return (
      noStyle &&
      css`
        background: none;
        padding: 0;
        color: ${theme.colors.black};
        border-radius: 0;
        border: none;
        &:hover {
          background: none;
        }

        &[data-disabled] {
          background: none;
          color: #eee;
          & p {
            color: #ccc;
          }
        }
      `
    );
  }}

  ${devices.mediumMax} {
    font-size: 15px;
  }

  ${devices.smallMax} {
    font-size: 11px;
    /* height: 40px; */
    border-width: 1px;
  }
`;
