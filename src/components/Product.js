import React, { Component } from 'react';
import { Image, Button } from 'pcln-design-system';
import { connect } from 'react-redux';
import { cartAddition } from '../store';

export class Product extends Component {

  componentDidMount(){
    console.log('state', this.state, 'props', this.props)
  }
  render() {
    const { addToTheCart } = this.props;
    return (
      <div>
      <Image
    alt='Vacation'
    src='https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20'
  />
      <h2>Bahama getaway!</h2>
      <button onClick={() => addToTheCart({key: 'hi'})}>
      Add to cart
    </button>
      </div>
    )

  }
}

const mapDispatchToProps = dispatch => ({
  addToTheCart: (product) => {
    dispatch(cartAddition(product))
  }
})

const mapStateToProps = function(state) {
  return {
    Product: state.currentProduct
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Product);
