import MultiRangeSlider from 'apps/front-office/design-system/components/Form/MultiRangeSlider'
import { Flex } from 'apps/front-office/design-system/components/Grids'
import React from 'react'
import { propertiesAtom } from '../../atoms';
import { filterMaxPrice, filterMinPrice } from './helpers';
import { PriceRangeWrapper } from './style';

const PriceRange = () => {
  const [properties, setProperties] = propertiesAtom.useState();

  // Call the function to get objects with the minimum price
  const minPrice = filterMinPrice(properties?.properties);
  const maxPrice = filterMaxPrice(properties?.properties);

  return (
    <PriceRangeWrapper>
      <Flex fullWidth>
        <MultiRangeSlider
          min={minPrice}
          max={maxPrice}
          name="price"
          defaultValue={[minPrice, maxPrice]}
        />
      </Flex>
    </PriceRangeWrapper>
  )
}

export default PriceRange