import React from 'react'
import { HeaderWrapper, Wrapper } from './style'
import { H1, H3 } from '../Typography'
import { trans } from '@mongez/localization'
import { Container } from '../Grids'

const PageHeader = ({title, subTitle}) => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <H1 weight='700'>{trans(title)}</H1>
          <H3 weight='400'>{trans(subTitle)}</H3>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  )
}

export default PageHeader