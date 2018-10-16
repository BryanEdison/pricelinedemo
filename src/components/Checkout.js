import React from 'react';
import { connect } from 'react-redux';
import { cartAddition, cartDeletion } from '../store';
import { Image, Button, Banner, Flex, Icon, Box, Heading } from 'pcln-design-system';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &hover, &:visited, &:link, &:active {
  text-decoration: none;
}
`

const StyledImg = styled(Image)`
height: 500px;
width: 500px;
`

export const Checkout = (props) => {
  console.log(props)

  const finalCart = props.cart.map((item, index) =>

    <ul key={index}>{`Item number: ${item.key}`}
    <StyledImg alt='vaca' src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20' />
    <Button size='large' mr={2} onClick={() => props.deleteFromTheCart({key: item.key})}>
      Delete from Cart
    </Button>
    </ul>

    )
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
    </Box>
  </Flex>
  </Banner>
    <h2>Hi hello you are checking out now.</h2>
    <h2>{`You have products ${props.cart.length} in your cart`}</h2>
    {finalCart}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToTheCart: (product) => {
    dispatch(cartAddition(product))
  },
  deleteFromTheCart: (product) => {
    dispatch(cartDeletion(product))
  }
})

const mapStateToProps = function(state) {
  return {
    product: state.currentProduct,
    cart: state.cart
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
