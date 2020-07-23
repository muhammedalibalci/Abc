import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../../actions/authAction'
import { getCarts } from '../../../actions/basketAction'

import './navbar.css'

class Header extends Component {


  handleOnclick = () => {
    this.props.logout()
  }

  componentDidMount() {
    this.props.getCarts()
  }


  render() {
    const { isAuthenticated } = this.props.auth;

    const guestLinks = (
      <ul className="navbar-nav ml-auto">

        <li className="nav-item mr-4 ">
          <Link to="/login">
          <img src={require("../../../assets/icons/login.svg")} alt=".." className="mr-1 mb-1" />
            Login
            </Link>
        </li>
        <li className="nav-item ">
          <Link to="/register">
          <img src={require("../../../assets/icons/signup.svg")} alt=".." className="mr-1 mb-1" />
            Sign up
            </Link>
        </li>
      </ul>
    );

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <Link to="/my-account">
            <img src={require("../../../assets/icons/user.svg")} alt=".." className="mr-1 mb-1" />
            My Account
            </Link>
        </li>
        <li className="nav-item mr-4">
          <Link to="" onClick={this.handleOnclick}>
            <img src={require("../../../assets/icons/logout.svg")} alt=".." className="mr-1 mb-1" />
            Logout
          </Link>
        </li>
        <li className="nav-item ml-2">
          <Link to="/basket" >
            <img src={require("../../../assets/icons/shopping-cart.svg")} alt=".." className="mr-1 mb-1" />
            {this.props.cartsLength}
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/">
            <h3 > eAbc </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-label="Toggle navigation"
          >
            <img src={require("../../../assets/icons/down-arrow.svg")} alt=".." className="mr-1 mb-1" />
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">

            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  cartsLength: state.basket.carts.length
});
export default connect(
  mapStateToProps,
  { logout, getCarts }
)(Header);