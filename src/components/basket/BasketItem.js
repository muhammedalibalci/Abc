import React from 'react'

export const BasketItem = ({ cart, decreaseProduct, increaseProduct, removeProduct }) => {
    return (
        <div className="row">
            <div className="col-1 p-2" onClick={removeProduct}>
                <i className="fa fa-times-circle i-remove-color"></i>
            </div>
            <div className="col-2">
                <img src={cart.productDetail.product.imageUrl} alt="..." width="100" height="70" />
            </div>
            <div className="col-2 p-name p-2">
                <div >{cart.productDetail.product.name}</div>
            </div>
            <div className="col-2 p-2">
                <div >$ {cart.productDetail.product.price}</div>
            </div>
            <div className="col-2 p-2">
                <button className="btn btn-sm btn-secondary" onClick={decreaseProduct}>-</button>
                <span className="quantity ml-2 mr-2">{cart.quantity}</span>
                <button className="btn btn-sm btn-increase " onClick={increaseProduct}>+</button>
            </div>
            <div className="col-2 p-2">
                <div >$  {cart.productDetail.product.price * cart.quantity}</div>
            </div>
        </div>
    )
}
