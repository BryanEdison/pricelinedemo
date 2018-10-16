import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


//FAKE DATABASE
let cart = []

//Fake Ajax requests
//Functions turned into promises

function addProductToCart(product) {
  return new Promise(function (resolve, reject) {
    cart.push(product);
    if (cart.length === 0) reject('Error in add thunk')
    else resolve(cart)
  })
}

function deleteProductFromCart(product) {
  return new Promise(function (resolve, reject) {
    // console.log('cart1', cart);
    cart = cart.filter(item => item.key !== product.key);
    // console.log('cart2', cart);
    if (product.length < 0) reject('Error in delete thunk')
    else resolve(product)
  })
}


//INITIAL STATE//
const initialState = {
  cart: []
}

//ACTION TYPE//
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_TO_CART';


//ACTION CREATOR//

export function addtoCart(product) {
  const action = { type: ADD_TO_CART, product };
  return action;
}

export function deleteFromCart(cart) {
  const action = { type: DELETE_FROM_CART, cart };
  return action;
}



//THUNKS//


export function cartAddition(product) {
  return function thunk(dispatch) {
    return addProductToCart(product)
      .then(cart => {
        console.log('ADD THUNK RESPONSE', cart)
        const action = addtoCart(product);
        console.log(cart);
        dispatch(action);
      })
  }
}

export function cartDeletion(product) {
  return function thunk(dispatch) {
    return deleteProductFromCart(product)
      .then(cart => {
        console.log('DELETE THUNK RESPONSE', product)
        const action = deleteFromCart(product);
        dispatch(action);
      })
  }
}



///REDUCER///

function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART:
      return Object.assign({}, state, { cart: [...state.cart, action.product] });

    case DELETE_FROM_CART:
    console.log('reducer', action, state)
    return Object.assign({}, state, {
      cart: [...state.cart.filter(item => item.key !== action.cart.key)],
    });

    default:
      return state;
  }
}


export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));





