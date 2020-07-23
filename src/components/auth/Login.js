import React, { Component } from 'react'
import { LoginForm } from './LoginForm'
import { login } from "../../actions/authAction";
import Spinner from '../common/spinner/Spinner'
import './auth.css'
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if (prevProps.errors !== this.props.errors) {
            this.setState({ errors: this.props.errors });
        }
    }


    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(userData);
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, password } = this.state
        return (
            <div className="container login-container " >
                <div className="card shadow mx-auto text-center p-5 w-50">
                    <h3 className="login-title">
                        <img src={require("../../assets/icons/login.svg")} alt=".." className="mr-1 mb-1" />
                        Login User
                    </h3>
                    {this.props.auth.loading && <Spinner classNames="spinner2" />}
                    <span className="err-message">{this.props.error}</span>
                    <LoginForm
                        email={email}
                        password={password}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        disabled={this.props.auth.loading}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    error: state.errors.error
})
export default connect(
    mapStateToProps,
    { login }
)(Login);