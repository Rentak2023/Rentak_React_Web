import { trans } from "@mongez/localization";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import { Col } from "apps/front-office/design-system/components/Grids";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import React, { useEffect, useState } from "react";
import { getPaymentMethodsIn } from "../../services/services";
import { current } from "@mongez/react";

const PaymentMethodsStep = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);

  const getPaymentMethods = async () => {
    try {
      const response = await getPaymentMethodsIn();
      const formattedPaymentMethods = response.data.map(method => (
        {
          label: current('localeCode') === "ar" ? method.method_name_ar : method.method_name_en,
          value: String(method.id)
        }
      ));
      setPaymentMethods(formattedPaymentMethods)
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return showNotification({
          type: "danger",
          message: value[0],
        });
      });
    }
  };

  useEffect(() => {
    getPaymentMethods()
  }, []);
  
  return (
    <Col span={10}>
      <SelectInput
        name="cash_in_payment_meyhod_id"
        label="paymentMethods"
        data={paymentMethods}
        required
        clearable
      />
    </Col>
  );
};

export default PaymentMethodsStep;
