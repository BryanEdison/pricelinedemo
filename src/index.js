import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import './index.css';
import history from './history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'pcln-design-system';
import store from './store';


ReactDOM.render(
  <Provider store={store} >
  <Router history={history}>
  <ThemeProvider>
  <App />
  </ThemeProvider>
  </Router>
  </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
