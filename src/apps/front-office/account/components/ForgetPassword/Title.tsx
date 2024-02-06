import { trans } from '@mongez/localization'
import { theme } from 'apps/front-office/design-system'
import { Flex } from 'apps/front-office/design-system/components/Grids'
import { H5, Small } from 'apps/front-office/design-system/components/Typography'
import React from 'react'

const Title = () => {
  return (
    <Flex direction='column' align='center'>
     <H5>{trans("forgetPassword")}</H5> 
     <Small color={theme.colors.grey[200]}>{trans("forgetPasswordSubTitle")}</Small>
    </Flex>
  )
}

export default Title