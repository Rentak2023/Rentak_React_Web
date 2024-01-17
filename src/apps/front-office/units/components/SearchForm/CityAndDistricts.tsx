import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import { trans } from "@mongez/localization";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { useEffect, useState } from "react";
import { getCities, getDistricts } from "../../services/services";

const CityAndDistricts = () => {

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const getCitiesHandler = async () => {
    try {
      const response = await getCities();
      const formattedCities = response.data.map(city => ({
        label: city.city_name,
        value: city.city_id
      }))
      setCities(formattedCities);
    } catch (error) {
      console.log(error);
    }
  };
  const getDistrictsHandler = async () => {
    try {
      const response = await getDistricts();
      const formattedDistricts = response.data.map(district => ({
        label: district.governorate_name,
        value: district.governorate_id
      }))
      setDistricts(formattedDistricts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCitiesHandler();
    getDistrictsHandler();
  }, []);

  return (
    <Flex gap="57px" fullWidth className="flex">
      <SelectInput
        name="governoment_id"
        label="city"
        placeholder={trans("selectCity")}
        data={districts}
        clearable
      />
      <SelectInput
        name="city_id"
        label="districts"
        placeholder={trans("selectDistrict")}
        data={cities}
        clearable
      />
    </Flex>
  );
};

export default CityAndDistricts;
