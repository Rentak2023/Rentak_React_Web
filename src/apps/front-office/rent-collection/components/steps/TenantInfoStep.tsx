import { trans } from "@mongez/localization";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col } from "apps/front-office/design-system/components/Grids";

const TenantInfoStep = () => {
  return (
    <Col span={10}>
      <TextInput
        name="full_name"
        label={trans("tenantFullName")}
        placeholder={trans("fullName")}
        required
      />
      <PhoneNumberInput
        name="phone"
        label={trans("tenantPhoneNumber")}
        placeholder={trans("phoneNumber")}
        required
      />
    </Col>
  );
};

export default TenantInfoStep;
