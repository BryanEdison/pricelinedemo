import React from 'react';
import {Flex, Icon, Text, Banner, BackgroundImage, Box, Heading} from 'pcln-design-system';
import Market from './Market'

export const Home = (props) => {
  return (
    <div>
    <Banner
  showIcon={false}
  bg='blue'
  p={2}>
  <Flex>
    <Icon name='departure' />
    <Box pl={2}>
      <Heading fontSize={2} bold>China is calling</Heading>
      <Text>
        Bid on low-fare flights to Asia
      </Text>
    </Box>
  </Flex>
</Banner>
<Banner
  showIcon={false}
  bg='white'
  p={3}>
  <Flex>
    <Box pl={2}>
      <Heading color="blue" fontSize={3} bold>priceline</Heading>
    </Box>
    <Box pl={6}>
    <Heading color="grey" fontSize={2}>Hotels</Heading>
  </Box>
  <Box pl={4}>
    <Heading color="grey" fontSize={2}>Cars</Heading>
  </Box>
  <Box pl={4}>
    <Heading color="grey" fontSize={2}>Flights</Heading>
  </Box>
  <Box pl={4}>
    <Heading color="grey" fontSize={2}>Cruises</Heading>
  </Box>
  <Box pl={6}>
    <Heading color="blue" fontSize={2}>Sign In</Heading>
  </Box>
  <Box pl={4}>
    <Heading color="blue" fontSize={2}>Find my Trip</Heading>
  </Box>
  <Box pl={4}>
    <Heading color="blue" fontSize={2}>Help</Heading>
  </Box>
  <Box pl={6}>
    <Heading color="blue" fontSize={2}>Cart</Heading>
    <Icon name='bag' />
  </Box>
  </Flex>
</Banner>
    <BackgroundImage
  image='https://livability.com/sites/default/files/alaska-employers1.jpg'>
  <Box p={6}>
    <Heading
      fontSize={5}
      align='left'
      bold
      color='white'>
      Save more on your next hotel!
    </Heading>
  </Box>
</BackgroundImage>
<Market/>
    </div>
  )
}
