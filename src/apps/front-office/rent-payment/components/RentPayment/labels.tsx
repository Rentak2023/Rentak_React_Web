import { trans } from "@mongez/localization";
import { P4 } from "apps/front-office/design-system/components/Typography";

export const labels = [
  <P4 weight="600" style={{ width: "max-content" }}>
    {trans("personalInfo")}
  </P4>,
  <P4 weight="600" style={{ width: "max-content" }}>
    {trans("paymentMethod")}
  </P4>,
  <P4 weight="600" style={{ width: "max-content" }}>
    {trans("ownerInfo")}
  </P4>,
  <P4 weight="600" style={{ width: "max-content" }}>
    {trans("unitDescription")}
  </P4>,
  <P4 weight="600" style={{ width: "max-content" }}>
    {trans("confirmation")}
  </P4>,
];
