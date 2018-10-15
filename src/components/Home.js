import React from 'react';
import {Flex, Icon, Text, Banner, BackgroundImage, Box, Heading} from 'pcln-design-system';
import Market from './Market';
import Header from './Header';
import { connect } from 'react-redux';
import { cartAddition } from '../store';


export const Home = (props) => {
  console.log(props)
  return (
    <div>
    <Header/>
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
