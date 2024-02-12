import { trans } from "@mongez/localization";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col } from "apps/front-office/design-system/components/Grids";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import DateInput from "apps/front-office/design-system/components/Form/DateInput";
import { Grid } from "@mantine/core";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/services";
import { HiddenInput } from "@mongez/react-form";
import { rentCollectionFeesAtom } from "../../atoms";

const UnitDescriptionStep = () => {
  const [productFees, setProductFees] = useState<any>(0);
  const [rentAmount, setRentAmount] = useState<any>(0);
  const [total, setTotal] = useState(0);

  const getProductsFees = async () => {
    try {
      const response = await getProducts();
      const rentPaymentProduct = response.data.find(
        product => product.id === 3,
      );
      setProductFees(rentPaymentProduct.fees);
      rentCollectionFeesAtom.update({fees: rentPaymentProduct.fees})

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

  const calculateTotal = (baseAmount, fees) => {
    const parsedBaseAmount = Number(baseAmount);
    const parsedFees = Number(fees);
    // Calculate the total with promo discount
    const total = parsedBaseAmount;
  
    return total;
  };

  useEffect(() => {
    setTotal(calculateTotal(rentAmount, productFees) as any)
  }, [productFees, rentAmount]);

  const fees = rentAmount > 0 ? (productFees / 100) * rentAmount : productFees;
  
  const days = [...Array(29)].map((day, index) => ({
    label: index + 1,
    value: index + 1
  }));

  return (
    <Col span={12} md={10}>
      <TextInput
        name="unit_description"
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
          <HiddenInput name="product_id" value={2} />
          <TextInput
            name="admin_fees"
            label={trans("serviceFees")}
            placeholder={trans("serviceFees")}
            value={fees}
            readOnly
          />
        </Col>
      </Grid>
      <NumberInput
        name="total_amount"
        label={`${trans("totalAmount")}`}
        placeholder={trans("totalAmount")}
        min={1}
        value={total}
      />
      <DateInput
        name="contract_start_date"
        label="contractStartDate"
        placeholder={trans("contractStartDate")}
        required
      />
      <DateInput
        name="contract_end_date"
        label="contractEndDate"
        placeholder={trans("contractEndDate")}
        required
      />
      <NumberInput
        name="annual_increase_percentage"
        label={trans("annualIncreasePercentage")}
        placeholder={trans("annualIncreasePercentage")}
        min={0}
        defaultValue={0}
      />
      <SelectInput
        name="collection_day"
        label="collectionDay"
        data={days}
        required
        clearable
      />
    </Col>
  );
};

export default UnitDescriptionStep;
