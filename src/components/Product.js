import React from 'react';
import { Image, Button, Banner, Flex, Box, Icon, Heading, Text } from 'pcln-design-system';
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
const StyledImg = styled(Image)`
height: 80px;
width: 80px;
`



export const Product = (props) => {
    return (

      <div>
      <Banner
  showIcon={false}
  bg='blue'
  p={2}>
  <Flex>
    <Icon name='departure' />
    <Box pl={2}>

    <StyledLink to='/'>
    <Heading color='white' fontSize={2} bold>Home</Heading>
  </StyledLink>

  <StyledLink to='/checkout'>
  <Heading color="blue" fontSize={2}>Cart</Heading>
    <Icon name='bag' />
    </StyledLink>

    <Text>{props.Cart.length}</Text>
    </Box>
  </Flex>
</Banner>
      <StyledImg
    alt='Vacation'
    src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20'
  />
      <h2>Bahama getaway!</h2>
      <Button size='large' mr={2} onClick={() => props.addToTheCart({key: 'hi'})}>
      Add to cart
    </Button>
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
    Product: state.currentProduct,
    Cart: state.cart
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Product);
