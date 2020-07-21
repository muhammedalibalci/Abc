import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
const ProductItem = props => {
    const { _id, name, price, imageUrl, discount } = props.product;
    const { handleOnClick } = props;
    return (
        <div className="product-card">
            <div className="product-tumb">
                <img src={imageUrl} />
            </div>
            <div className="product-details">
                <h4>
                    <Link to={`/product/${_id}`}>{name}</Link>
                </h4>
                <div className="product-bottom-details">
                    <div className="product-price">
                        <small>$ {price}</small>
                    </div>
                    <div className="product-links">
                        <i className="fa fa-cart-plus fa-2x" onClick={handleOnClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;