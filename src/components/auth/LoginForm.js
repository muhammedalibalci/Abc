import React from 'react'
import TextField from '../common/input/TextField'
import { Link } from 'react-router-dom'

export const LoginForm = ({ onChange, onSubmit, email, password, disabled }) => {
    return (
        <form onSubmit={onSubmit}>
            <TextField
                type="text"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={email}
                disabled={disabled}
            />
            <TextField
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={password}
                disabled={disabled}
            />
            <div className="mt-2 ">
                <span >
                    Do you not have account ?
                </span>
                <Link to="/register" style={{ color: '#0f4c75', fontWeight: 'bold' }}> Sign Up</Link>
            </div>
            <button className="btn btn-login mt-2 w-100" disabled={disabled}>
                <i className="fa fa-sign-in"></i> Login
                </button>
        </form>
    )
}
