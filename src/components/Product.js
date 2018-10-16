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
height: 500px;
width: 500px;
display: block;
margin-left: auto;
margin-right: auto
`
const StyledDiv = styled('div')`
margin-top: 20px;
text-align: center;
align-items: center;
`


export const Product = (props) => {
  console.log('Product props', props);
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
      <StyledDiv>
      <StyledImg
    alt='Vacation'
    src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20'
  />
      <h2>Bahama getaway!</h2>
      <Button size='large' mr={2} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
      Add to cart
    </Button>
    </StyledDiv>
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



export default connect(mapStateToProps, mapDispatchToProps)(Product);
