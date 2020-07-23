import React from 'react'
import { Link } from 'react-router-dom'

export const OrderItem = ({ order }) => {
    return (
        <div className=" card w-50 mx-auto mb-2 p-4">
            <div className=" d-flex justify-content-between">
                <img src={order.productDetail.product.imageUrl} alt="..." width="100" height="80" />
                <div className="font-weight-bold">
                    <Link to={`product/${order.productDetail.product.id}`} className="o-link">
                        {order.productDetail.product.name}
                    </Link>
                </div>
                <div >{order.order.createdDate.split('T')[0]}</div>
                <div >${order.productDetail.product.price}</div>
                <div >{order.quantity} item</div>
                <div >${order.productDetail.product.price * order.quantity}</div>

            </div>
        </div>
    )
}
