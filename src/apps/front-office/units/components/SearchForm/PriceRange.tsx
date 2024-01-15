import MultiRangeSlider from 'apps/front-office/design-system/components/Form/MultiRangeSlider'
import { Flex } from 'apps/front-office/design-system/components/Grids'
import React from 'react'

const PriceRange = () => {
  const onChangeHandler = (e) => {

  }
  return (
    <Flex fullWidth>
      <MultiRangeSlider
        min={10000}
        max={100000}
      />
    </Flex>
  )
}

export default PriceRange