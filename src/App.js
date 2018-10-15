import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Checkout} from './components/Checkout';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={Home}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/end"/>
      <Route exact path="/product" component={Product}/>
      </div>
    );
  }
}

export default App;
