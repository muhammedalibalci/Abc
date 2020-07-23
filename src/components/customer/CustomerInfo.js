import React from 'react'

export const CustomerInfo = ({ customer }) => {
    return (
        <div>
            <h5>My Account</h5>
            <span className=" ml-5">
                <span className="c-welcome">Welcome</span>
                <span className="customer-name ml-2">{customer.name}</span>
            </span>
        </div>
    )
}
