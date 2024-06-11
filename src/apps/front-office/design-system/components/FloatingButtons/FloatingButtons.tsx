import React from "react";
import { PropertyPhoneIcon, WhatsappIcon } from "shared/assets/svgs";
import { StyledFloatingButtons, FloatingButton } from "./style";

const FloatingButtons = () => {
  return (
    <StyledFloatingButtons>
      <FloatingButton href="tel:+201111111541">
        <PropertyPhoneIcon />
      </FloatingButton>
      <FloatingButton
        href="https://wa.me/+201111111541"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer">
        <WhatsappIcon size={44} color="#25D366" />
      </FloatingButton>
    </StyledFloatingButtons>
  );
};

export default FloatingButtons;
