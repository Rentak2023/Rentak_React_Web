import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import { trans } from "@mongez/localization";
import { Flex } from "apps/front-office/design-system/components/Grids";

const RoomsAndToilets = () => {
  return (
    <Flex gap="57px" fullWidth>
      <SelectInput
        name="city"
        label="rooms"
        placeholder={trans("selectRooms")}
        data={[
          { label: 2, value: "2" },
          { label: 3, value: "3" },
          { label: 4, value: "4" },
        ]}
        required
        clearable
      />
      <SelectInput
        name="city"
        label="toilets"
        placeholder={trans("selectToilets")}
        data={[
          { label: 1, value: "1" },
          { label: 2, value: "2" },
          { label: 3, value: "3" },
        ]}
        required
        clearable
      />
    </Flex>
  );
};

export default RoomsAndToilets;
