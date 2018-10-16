import React from 'react';
import { connect } from 'react-redux';
import { cartAddition, cartDeletion } from '../store';
import { Divider, Image, Button, Banner, Flex, Icon, Box, Heading } from 'pcln-design-system';
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

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
margin: 9rem;

`

export const Checkout = (props) => {
  console.log(props)

  const finalCart = props.cart.map((item, index) =>

    <ul key={index}>{`Item number: ${item.key}`}
    <StyledImg alt='vaca' src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20' />
    <Button size='large' mr={2} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
      Add to cart
    </Button>
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
  {
    props.cart.length > 0 ?
    <div>
    <h2>{`You have products ${props.cart.length} in your cart`}</h2>
    <StyledDiv>
    {finalCart} <Divider m={2} /> </StyledDiv>    </div>
    : <h2> Your shopping cart is empty! Please continue browsing through our travel bargains!</h2>
  }

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
