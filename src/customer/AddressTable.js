import React from 'react'

export const AddressTable = ({address,deleteAddress}) => {
    return (
        <div className="mt-4">
            <h5>My Address</h5>
            <table className="table">
                <thead className="head">
                    <tr>
                        <th className="pl-5 pr-5 thead-f">Address</th>
                        <th className="pl-5 pr-5 thead-f">Post Code</th>
                        <th className="pl-5 pr-5 thead-f">City</th>
                        <th className="pl-5 pr-5 thead-f">Phone</th>
                        <th className="pl-5 pr-5 thead-f">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="pl-5 pr-5 thead-f">{address.address1}</th>
                        <th className="pl-5 pr-5 thead-f">{address.postCode}</th>
                        <th className="pl-5 pr-5 thead-f">{address.city}</th>
                        <th className="pl-5 pr-5 thead-f">{address.phone}</th>
                        <th className="pl-5 pr-5 thead-f" onClick={deleteAddress}>
                            <i className="fa fa-minus-circle"></i>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
