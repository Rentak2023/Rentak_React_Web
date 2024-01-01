import { trans } from "@mongez/localization";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import { Col } from "apps/front-office/design-system/components/Grids";

const PaymentMethodStep = () => {
  return (
    <Col span={10}>
      <SelectInput
        name="payment_methods"
        label="paymentMethods"
        data={[
          { label: trans("residential"), value: "سكني" },
          { label: trans("managerial"), value: "اداري" },
        ]}
        defaultValue={1}
        required
        clearable
      />
    </Col>
  );
};

export default PaymentMethodStep;
