import React from 'react'

export const Summary = ({ currentAddress, carts, totalAmount }) => {
    return (
        <div className="col-xl-4 col-md-6 mb-5">
            <div className="card mx-auto">
                <div className="card-body">
                    <div className="pb-4">
                        <div className="card-title float-left">{carts.length}</div>
                        <div className="card-title float-right">
                            <i className="fa fa-shopping-bag"></i>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <span className="c-title">Your Items</span>
                        {
                            carts && carts.map(cart => {
                                return (
                                    <ul key={cart.id} className="mt-2">
                                        <li>
                                            {cart.quantity} {cart.productDetail.product.name} ${cart.productDetail.product.price}
                                        </li>
                                    </ul>
                                )
                            })
                        }

                    </div>
                    <hr />
                    <div>
                        <span className="c-title">Delivery Address</span>
                        {!currentAddress.address1 && <p>Please select an address to ship</p>}
                        <p className="ml-5">{currentAddress.address1} {currentAddress.city} {currentAddress.postCode}</p>
                    </div>
                    <hr />
                    <div>
                        <span className="c-title">Payment Method</span>
                        <p className="ml-3 mt-2">
                            <i className="fa fa-credit-card"></i>Stripe
                    </p>
                    </div>
                    <hr />
                    <div>
                        <div className="float-left c-title">Total Paid</div>
                        <div className="float-right c-title">${totalAmount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
