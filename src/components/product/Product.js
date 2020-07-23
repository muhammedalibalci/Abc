import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProductById } from '../../actions/productAction'

import './ProductItem.css'
import Spinner from '../common/spinner/Spinner';
class Product extends Component {

    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.getProductById(id)
    }


    render() {
        const { product, loading } = this.props.product
        let productDisplay;
        if (loading) {
            return <Spinner classNames="spinner1" />;
        } else {
            productDisplay = (
                <div class="card shadow w-50 mx-auto p-3">
                    <div class="d-flex">
                        <div class="float-left">
                            <img src={product.imageUrl} width="300" height="300" alt="" />
                        </div>
                        <div class="ml-5">
                            <div class="pd-name">{product.name}</div>
                            <div class="pd-desc ml-2">{product.description}</div>
                            <div class="mt-5">
                                <div class="pd-price float-left">${product.price}</div>
                                <div class="float-right">
                                    <button class="btn pd-button" click="addToBasket(product.productDetails)">
                                        <i class="fa fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div class="pd">
                <div onClick={()=>  this.props.history.goBack()}>
                    <i class="fa fa-arrow-circle-left"></i>
                </div>
                {productDisplay}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product
});
export default connect(
    mapStateToProps,
    { getProductById }
)(Product);