import React from 'react'
import { Link } from 'react-router-dom'

export const Summary = ({ carts, totalAmount }) => {
    return (
        <div className="ml-auto sub-text">
            <div className="mr-2">
                <span className="float-right mb-4">
                    Items : {carts.length}

                </span>
            </div>
            <div className="mr-2">
                <span className="float-right">Total : $ {totalAmount}</span>
            </div>
            <Link to="/checkout">
                <button
                    className="btn btn-checkout float-right mr-2 mt-2"
                >Checkout</button>
            </Link>
        </div >
    )
}
