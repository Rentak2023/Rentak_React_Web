import { trans } from "@mongez/localization";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col, Flex } from "apps/front-office/design-system/components/Grids";
import React, { useEffect, useState } from "react";
import { getProducts, sendPromoCode } from "../../services/services";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { current } from "@mongez/react";
import { Grid } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { HiddenInput } from "@mongez/react-form";
import Button from "apps/front-office/design-system/components/Button";
import { theme } from "apps/front-office/design-system";
import { P4 } from "apps/front-office/design-system/components/Typography";

const UnitDescriptionStep = () => {
  const [productFees, setProductFees] = useState<any>(0);
  const [rentAmount, setRentAmount] = useState<any>(0);
  const [total, setTotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);

  const getProductsFees = async () => {
    try {
      const response = await getProducts();
      const rentPaymentProduct = response.data.find(
        product => product.id === 2,
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

  const calculateTotal = (baseAmount, fees, promoDiscount) => {
    const parsedBaseAmount = Number(baseAmount);
    const parsedFees = Number(fees);
    const parsedPromoDiscount = Number(promoDiscount);
  
    // Calculate the total with promo discount
    const total = parsedBaseAmount + (parsedBaseAmount * parsedFees) / 100;
    const discountAmount = (total * parsedPromoDiscount) / 100;
    const totalWithDiscount = total - discountAmount;
  
    return totalWithDiscount;
  };

  useEffect(() => {
    setTotal(calculateTotal(rentAmount, productFees, promoDiscount) as any)
  }, [productFees, rentAmount, promoDiscount]);

  const requestPromoCode = async () => {
    try {
      const response = await sendPromoCode({code: promoCode});
      setPromoDiscount(response.data.promocode.discount);

      showNotification({
        message: response.data.message,
      });

    } catch (error: any) {
      setPromoDiscount(0);

      showNotification({
        type: "danger",
        message: error.response.data.message,
      });
    }
  };

  const applyPromoCode = () => {
    if(!Is.empty(promoCode)){
      requestPromoCode();
    }else{
      setPromoCode('')
    }
  }

  useEffect(() => {
    if(!Is.empty(promoCode)){
      const timeoutId = setTimeout(() => requestPromoCode(), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [promoCode]);

  const fees = rentAmount > 0 ? (productFees / 100) * rentAmount : productFees;

  return (
    <Col span={12} md={10}>
      <TextInput
        name="property_description"
        label={`${trans("unitDescription")} ( ${trans(
          "unitDescriptionHint",
        )} )`}
        placeholder={trans("unitDescription")}
        required
      />
      <Grid>
        <Col span={12} md={9}>
          <NumberInput
            name="rent_amount"
            label={trans("rentAmount")}
            placeholder={trans("rentAmount")}
            min={1}
            value={rentAmount}
            onChange={(value) => {
              setRentAmount(value)
            }}
            required
          />
        </Col>
        <Col span={12} md={3}>
          <HiddenInput name="product_id" value={1} />
          <TextInput
            name="admin_fees"
            label={trans("serviceFees")}
            placeholder={trans("serviceFees")}
            value={fees}
            readOnly
          />
        </Col>
      </Grid> 
      {/* <TextInput
        name="promo_code"
        label={trans("promoCode")}
        placeholder={trans("promoCode")}
        value={promoCode}
        onChange={onChangePromoCode}
        onBlur={requestPromoCode}
      /> */}
      <Flex gap="1rem" fullWidth align="end" className="otp">
        <TextInput
          name="promo_code"
          label={trans("promoCode")}
          placeholder={trans("promoCode")}
          value={promoCode}
          onChange={(value) => {
            setPromoCode(value)
          }}
          
        />
        <Button onClick={applyPromoCode}>
          <P4 color={theme.colors.white}>{trans("applyPromoCode")}</P4>
        </Button>
      </Flex>
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
