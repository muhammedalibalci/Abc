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
          </Switch>
        </App>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();