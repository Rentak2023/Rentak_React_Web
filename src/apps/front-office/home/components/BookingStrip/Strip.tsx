import { theme } from 'apps/front-office/design-system';
import { Flex } from 'apps/front-office/design-system/components/Grids';
import { P4, Small } from 'apps/front-office/design-system/components/Typography';
import React from 'react'


type StripTypes = {
  icon: React.ReactNode;
  title: string;
  description: string
}
const Strip = ({icon, title, description}: StripTypes) => {
  return (
    <Flex align='center' gap="12px" className='strip'>
      {icon}
      <Flex direction='column'>
        <Small color={theme.colors.darkGrey}>{title}</Small>
        <P4>{description}</P4>
      </Flex>
    </Flex>
  )
}

export default Strip