import React from 'react';
import { connect } from 'react-redux';
import { cartAddition, cartDeletion } from '../store';


export const Checkout = (props) => {
  console.log(props)
  return (
    <div>
    <h2>Hi hello you are checking out now.</h2>
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
    Product: state.currentProduct,
    Cart: state.cart
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
