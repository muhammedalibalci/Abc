import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
const ProductItem = props => {
    const { id, name, price, imageUrl } = props.product;
    const { handleOnClick } = props;
    return (
        <div className="product-card ">
            <div className="product-tumb">
                <img src={imageUrl} alt="" />
            </div>
            <div className="product-details">
                <h4>
                    <Link to={`/product/${id}`}>{name}</Link>
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