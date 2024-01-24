import React from 'react'
import { ContactUsWrapper } from './style'
import { Container, Flex } from 'apps/front-office/design-system/components/Grids'
import Header from './Header'
import ContactUsCard from './ContactUsCard'

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <Container>
        <Flex fullWidth fullHeight justify='space-between' className='grid'>
          <Header />
          <ContactUsCard />
        </Flex>
      </Container>
    </ContactUsWrapper>
  )
}

export default ContactUs