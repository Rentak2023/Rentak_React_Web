import MultiRangeSlider from 'apps/front-office/design-system/components/Form/MultiRangeSlider'
import { Flex } from 'apps/front-office/design-system/components/Grids'
import React, { useEffect, useState } from 'react'
import { propertiesAtom } from '../../atoms';
import { filterMaxPrice, filterMinPrice } from './helpers';
import { PriceRangeWrapper } from './style';
import { getMinMaxPrice } from '../../services/services';

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [defaultValue, setDefaultValue] = useState([12000, 215000]);

  const getMinMaxPriceHandler = async () => {
    try {
      const response = await getMinMaxPrice();
      setMinPrice(response.data.min_price);
      setMaxPrice(response.data.max_price);
      setDefaultValue([minPrice, maxPrice])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMinMaxPriceHandler();
  }, [minPrice, maxPrice]);

  return (
    <PriceRangeWrapper>
      <Flex fullWidth>
        <MultiRangeSlider
          min={minPrice}
          max={maxPrice}
          name="price"
          defaultValue={defaultValue}
        />
      </Flex>
    </PriceRangeWrapper>
  )
}

export default PriceRange