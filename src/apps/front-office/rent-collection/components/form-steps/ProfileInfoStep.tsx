import { trans } from "@mongez/localization";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col } from "apps/front-office/design-system/components/Grids";
import { rentCollectionAtom } from "../../atoms";
import { HiddenInput } from "@mongez/react-form";
import { current } from "@mongez/react";

const ProfileInfoStep = () => {
  return (
    <Col span={12} md={10}>
      <HiddenInput name="lang" value={current('localeCode')} />
      <TextInput
        name="landlord_name"
        label={trans("fullName")}
        placeholder={trans("fullName")}
        onChange={(value) => rentCollectionAtom.update({username: value})}
        required
      />
      <PhoneNumberInput
        name="landlord_phone"
        label={trans("phoneNumber")}
        placeholder={trans("phoneNumber")}
        required
      />
    </Col>
  );
};

export default ProfileInfoStep;
