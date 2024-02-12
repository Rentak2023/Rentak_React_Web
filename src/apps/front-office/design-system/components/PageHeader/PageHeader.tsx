import React from 'react'
import { HeaderWrapper, Wrapper } from './style'
import { H1, H3, H4, Small } from '../Typography'
import { trans } from '@mongez/localization'
import { Container, Flex } from '../Grids'

interface Types {
  title: string;
  subTitle: string;
  icon?: React.ReactNode,
  description?: string
}

const PageHeader = ({title, subTitle, icon, description} : Types) => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Flex direction='column'>
            <H1 weight='700' style={{width: "max-content"}}>{trans(title)}</H1>
            <H4 weight='400'>{trans(subTitle)}</H4>
            {description && <Small weight='400'>{trans(description)}</Small>}
          </Flex>
          {icon && icon}
        </HeaderWrapper>
      </Container>
    </Wrapper>
  )
}

export default PageHeader