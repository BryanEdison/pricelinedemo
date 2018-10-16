import React from 'react';
import { BackgroundImage, Box, Heading, Link} from 'pcln-design-system';
import Market from './Market';
import Header from './Header';
import { connect } from 'react-redux';
import { cartAddition } from '../store';
import styled from 'styled-components';


const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
color: grey;


&:hover {
  text-decoration: none;
  color: grey;
  font-size: 25px;
`


export const Home = (props) => {
  console.log(props)
  return (
    <div>
    <Header/>
    <BackgroundImage
  image='https://livability.com/sites/default/files/alaska-employers1.jpg'>
  <Box p={6}>
  <Box p={3} bg='white'>
  <Heading
      fontSize={5}
      align='left'
      bold
      color='black'>
      Save more on your next hotel!
    </Heading>
    <StyledLink href='https://github.com/BryanEdison/pricelinedemo'>Source code available here: https://github.com/BryanEdison/pricelinedemo</StyledLink>
</Box>
  </Box>
</BackgroundImage>
<Market/>
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



export default connect(mapStateToProps, mapDispatchToProps)(Home);
