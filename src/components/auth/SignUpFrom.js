import React from 'react';
import TextFieldInput from "../common/input/TextField";

const SignUpForm = ({ errors, email, password, name, lastName, userName, onChange, onSubmit, loading }) =>
    (
        <form className="auth-form" onSubmit={onSubmit}>
            <span className="float-left err-message">{errors.Name}</span>
            <TextFieldInput
                type="text"
                name="name"
                placeholder="Name"
                error={errors.Name}
                value={name}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.LastName}</span>
            <TextFieldInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                error={errors.LastName}
                value={lastName}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.UserName}</span>
            <TextFieldInput
                type="text"
                name="userName"
                placeholder="User Name"
                error={errors.UserName}
                value={userName}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.Email}</span>
            <TextFieldInput
                type="text"
                name="email"
                placeholder="Email"
                error={errors.Email}
                value={email}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.Password}</span>
            <TextFieldInput
                type="password"
                name="password"
                placeholder="Password"
                error={errors.Password}
                value={password}
                onChange={onChange}
                disabled={loading}
            />
            <button className="btn btn-login mt-2 w-100" disabled={loading}>
                <i className="fa fa-sign-in"></i> Sign Up
            </button>

        </form>
    )


export default SignUpForm;