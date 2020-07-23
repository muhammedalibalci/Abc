import React from 'react'
import TextField  from '../common/input/TextField'

export const AddAddressForm = ({ errors, fullName, address1, postCode, city, phone, onChange, onSubmit, loading }) => {
    return (
        <form className="auth-form" onSubmit={onSubmit}>
            <span className="float-left err-message">{errors.Name}</span>
            <TextField
                type="text"
                name="fullName"
                placeholder="Full Name"
                error={errors.FullName}
                value={fullName}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.Address1}</span>
            <TextField
                type="text"
                name="address1"
                placeholder="Address"
                error={errors.Address1}
                value={address1}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.PostCode}</span>
            <TextField
                type="text"
                name="postCode"
                placeholder="Post Code"
                error={errors.PostCode}
                value={postCode}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.City}</span>
            <TextField
                type="text"
                name="city"
                placeholder="City"
                error={errors.City}
                value={city}
                onChange={onChange}
                disabled={loading}
            />
            <span className="float-left err-message">{errors.Phone}</span>
            <TextField
                type="text"
                name="phone"
                placeholder="Phone"
                error={errors.Phone}
                value={phone}
                onChange={onChange}
                disabled={loading}
            />
            <button className="btn btn-login mt-2 w-100" disabled={loading}>
                 Add
            </button>

        </form>
    )
}
