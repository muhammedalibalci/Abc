import React from 'react'
import Payment from './Payment'

export const AddressSection = ({ addresses, onClickCurrentAddress, openModal, currentAddress,onClickPay }) => {
    return (
        <div className="col-xl-6 col-md-6 mx-auto">
            <div className="mx-auto">
                <div className="card pl-4 pr-5 pt-2 pb-4">
                    <table>
                        <thead>
                            <tr className="head mt-2">
                                <th className="p-3">
                                    <i className="fa fa-check-circle"></i>
                                </th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addresses && addresses.map(address => {
                                    return (
                                        <tr key={address.id}>
                                            <th>
                                                <input
                                                    type="radio"
                                                    name="shipAddress"
                                                    onClick={() => onClickCurrentAddress(address)}
                                                    value="address.id"
                                                />
                                            </th>
                                            <th className="pr-3">{address.address1}</th>
                                            <th className="pr-3">{address.phone}</th>
                                            <th>{address.city}</th>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    {
                        addresses && addresses.length === 0 &&
                        <div className="alert alert-danger text-center">
                            <span>Not Found</span>
                        </div>
                    }
                </div>
                <button className="btn btn-address btn-sm mt-2" onClick={openModal}>
                    New Address
                </button>
                
                {currentAddress.address1 && <Payment addressId = {currentAddress.id} onClickPay={onClickPay} />}
            </div>
        </div>
    )
}
