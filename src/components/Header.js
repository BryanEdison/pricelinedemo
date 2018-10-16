import React from 'react';
import {Flex, Icon, Text, Banner, Box, Heading} from 'pcln-design-system';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAddition } from '../store';
import styled from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &hover, &:visited, &:link, &:active {
  text-decoration: none;
}
`

export const Header = (props) => {
  console.log(props)
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
    <StyledLink to='/checkout'>
    <Heading color="blue" fontSize={2}>Cart</Heading>
    <Icon name='bag' />
    <Text>{props.Cart.length}</Text>
    </StyledLink>
  </Box>
  </Flex>
</Banner>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToTheCart: (product) => {
    dispatch(cartAddition(product))
  }
})

const mapStateToProps = function(state) {
  return {
    Cart: state.cart
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);
