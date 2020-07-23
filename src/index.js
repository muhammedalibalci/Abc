import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from "./store";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import * as serviceWorker from "./serviceWorker";
import SignUp from './components/auth/SignUp';
import jwtDecode from "jwt-decode";
import { AUTH_USER } from './actions/types';
import { logout } from './actions/authAction';
import Products from './components/product/Products';
import Basket from './components/basket/Basket';
import Product from './components/product/Product';
import Customer from './components/customer/Customer';
import Checkout from './components/checkout/Checkout';
import  Orders  from './components/customer/Orders';

if (localStorage.token) {
  if (jwtDecode(localStorage.getItem("token")).exp > Date.now()) {
    store.dispatch(logout());
    window.location.href = "/login";
  }
  store.dispatch({
    type: AUTH_USER,
    payload: jwtDecode(localStorage.getItem("token"))
  });
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp} />
            <Route path="/products" component={Products} />
            <Route path="/basket" component={Basket} />
            <Route path="/product/:id" component={Product} />
            <Route path="/my-account" component={Customer} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </App>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


