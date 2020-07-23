import React from 'react'

export const OrderItem = ({ order }) => {
    console.log(order);
    return (
        <div className=" card w-50 mx-auto mb-2 ">
            <div className="row">
                <div className="col-2">
                    <img src={order.productDetail.product.imageUrl} alt="..." width="100" height="70" />
                </div>
                <div className="col-4 p-name p-2">
                    <div >{order.productDetail.product.name}</div>
                </div>
                <div className="col-2  p-2">
                    <div >{order.order.createdDate.split('T')[0]}</div>
                </div>
                <div className="col-2 p-2">
                    <div >$ {order.productDetail.product.price}</div>
                </div>
                <div className="col-2 p-2 ml-auto">
                    <div >$  {order.productDetail.product.price * order.quantity}</div>
                </div>
            </div>
        </div>
    )
}
