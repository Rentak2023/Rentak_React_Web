import React from 'react'
import { HeaderWrapper, Wrapper } from './style'
import { H1, H3 } from '../Typography'
import { trans } from '@mongez/localization'
import { Container, Flex } from '../Grids'

interface Types {
  title: string;
  subTitle: string;
  icon?: React.ReactNode
}

const PageHeader = ({title, subTitle, icon} : Types) => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Flex direction='column'>
            <H1 weight='700' style={{width: "max-content"}}>{trans(title)}</H1>
            <H3 weight='400'>{trans(subTitle)}</H3>
          </Flex>
          {icon && icon}
        </HeaderWrapper>
      </Container>
    </Wrapper>
  )
}

export default PageHeader