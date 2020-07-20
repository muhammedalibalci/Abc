import React, { Component } from 'react'
import SignUpForm from './SignUpFrom'
import { signUp } from "../../actions/authAction";
import { connect } from 'react-redux';
import Spinner from '../common/spinner/Spinner'
import './auth.css'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        lastName: '',
        userName: '',
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

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();

        const { email, password, name, lastName, userName } = this.state

        const userData = {
            email,
            password,
            name,
            lastName,
            userName
        }
        this.props.signUp(userData);
    }
    render() {
        const { email, password, name, lastName, userName } = this.state
        return (
            <div className="container mt-5 " >
                <div className="card shadow mx-auto text-center p-5 w-50">
                    <h3 className="login-title">
                        <i className="fa fa-user" aria-hidden="true"></i>  Sign Up User
                    </h3>
                    {
                        this.props.auth.loading && <Spinner classNames="spinner2" />
                    }
                    {this.props.error}
                    <SignUpForm
                        email={email}
                        password={password}
                        name={name}
                        lastName={lastName}
                        userName={userName}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        errors={this.props.errors}
                        loading={this.props.auth.loading}
                    />
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { signUp })(SignUp);
