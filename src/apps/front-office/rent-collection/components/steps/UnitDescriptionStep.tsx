import { trans } from "@mongez/localization";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col } from "apps/front-office/design-system/components/Grids";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import DateInput from "apps/front-office/design-system/components/Form/DateInput";

const UnitDescriptionStep = () => {
  return (
    <Col span={10}>
      <TextInput
        name="unit_description"
        label={`${trans("unitDescription")} ( ${trans(
          "unitDescriptionHint",
        )} )`}
        placeholder={trans("unitDescription")}
      />
      <NumberInput
        name="rent_amount"
        label={trans("rentAmount")}
        placeholder={trans("rentAmount")}
        min={1}
      />
      <NumberInput
        name="service_fees"
        label={trans("serviceFees")}
        placeholder={trans("serviceFees")}
        min={1}
      />
      <NumberInput
        name="total_amount"
        label={`${trans("totalAmount")} ( ${trans("totalAmountHint")} )`}
        placeholder={trans("totalAmount")}
        min={1}
      />
      <DateInput
        name="contract_start_date"
        label="contractStartDate"
        placeholder="startDate"
        required
      />
      <DateInput
        name="contract_end_date"
        label="contractEndDate"
        placeholder="endDate"
        required
      />
      <NumberInput
        name="total_amount"
        label={trans("annualIncreasePercentage")}
        placeholder={trans("totalAmount")}
        min={1}
      />
      <SelectInput
        name="collection_day"
        label="collectionDay"
        data={[
          { label: trans("residential"), value: "سكني" },
          { label: trans("managerial"), value: "اداري" },
        ]}
        required
        clearable
      />
    </Col>
  );
};

export default UnitDescriptionStep;
