import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../../actions/authAction'

import './navbar.css'

class Header extends Component {


  handleOnclick = () => {
    this.props.logout()
  }


  render() {
    const { isAuthenticated } = this.props.auth;

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      
        <li className="nav-item mr-4 ">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item ">
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    );

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <Link to="/my-account">My Account</Link>
        </li>
        <li className="nav-item">
          <Link to="" onClick={this.handleOnclick}>
            Logout
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
            <i className="fa fa-align-justify"></i>
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
});
export default connect(
  mapStateToProps,
  { logout }
)(Header);