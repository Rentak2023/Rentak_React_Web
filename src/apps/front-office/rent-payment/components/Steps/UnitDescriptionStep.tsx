import { trans } from "@mongez/localization";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col } from "apps/front-office/design-system/components/Grids";
import React, { useEffect, useState } from "react";
import { getProducts, sendPromoCode } from "../../services/services";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { current } from "@mongez/react";
import { Grid } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { HiddenInput } from "@mongez/react-form";

const UnitDescriptionStep = () => {
  const [productFees, setProductFees] = useState([]);
  const [rentAmount, setRentAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  const onChangeRentAmount = (e) => {
    setRentAmount(e.target.value)
  }
  const onChangePromoCode = (e) => {
    setPromoCode(e.target.value)
  }
  function calculateTotal(percentage, baseAmount) {
    // Ensure that the inputs are valid numbers
    const parsedPercentage = parseFloat(percentage);
    const parsedBaseAmount = parseFloat(baseAmount);
  
    // Check if the inputs are valid numbers
    // if (isNaN(parsedPercentage) || isNaN(parsedBaseAmount)) {
    //   return 'Invalid input. Please provide valid numbers.';
    // }
  
    // Calculate the total
    const total = parsedBaseAmount + (parsedBaseAmount * parsedPercentage) / 100;
    
    return total;
  }
  const getProductsFees = async () => {
    try {
      const response = await getProducts();
      const rentPaymentProduct = response.data.find(
        product => product.id === 1,
      );
      setProductFees(rentPaymentProduct.fees);
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
    getProductsFees();
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(productFees, rentAmount))
  }, [productFees, rentAmount]);

  const requestPromoCode = async () => {
    try {
      const response = await sendPromoCode({code: promoCode});
      console.log(response);

      showNotification({
        message: response.data.message,
      });

    } catch (error: any) {
      showNotification({
        type: "danger",
        message: error.response.data.message,
      });
    }
  };
  useEffect(() => {
    if(!Is.empty(promoCode)){
      const timeoutId = setTimeout(() => requestPromoCode(), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [promoCode]);

  return (
    <Col span={10}>
      <TextInput
        name="property_description"
        label={`${trans("unitDescription")} ( ${trans(
          "unitDescriptionHint",
        )} )`}
        placeholder={trans("unitDescription")}
      />
      <Grid>
        <Col span={9}>
          <NumberInput
            name="rent_amount"
            label={trans("rentAmount")}
            placeholder={trans("rentAmount")}
            min={1}
            value={rentAmount}
            onChange={onChangeRentAmount}
          />
        </Col>
        <Col span={3}>
          <HiddenInput name="product_id" value={1} />
          <TextInput
            name="admin_fees"
            label={trans("serviceFees")}
            placeholder={trans("serviceFees")}
            value={productFees}
            readOnly
          />
        </Col>
      </Grid> 
      <TextInput
        name="promo_code"
        label={trans("promoCode")}
        placeholder={trans("promoCode")}
        value={promoCode}
        onChange={onChangePromoCode}
        onBlur={requestPromoCode}
      />
      <NumberInput
        name="total_amount"
        label={`${trans("totalAmount")} ( ${trans("totalAmountHint")} )`}
        placeholder={trans("totalAmount")}
        min={1}
        readOnly
        value={total}
      />
    </Col>
  );
};

export default UnitDescriptionStep;
