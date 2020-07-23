import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProductById } from '../../actions/productAction'
import { addCartToBasket } from '../../actions/basketAction'
import './ProductItem.css'
import Spinner from '../common/spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Product extends Component {

    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.getProductById(id)
    }
    addToBasket = (productDetails) => {
        const data = {
            Quantity: 1,
            ProductDetailId: productDetails.map(item => item.id)[0]
        }

        this.props.addCartToBasket(data)
            .then((res) => { this.notify() })
            .catch(err => console.log(err))
    }
    notify = () => toast("Product Added Successfully !");

    render() {
        const { product, loading } = this.props.product
        let productDisplay;
        if (loading) {
            return <Spinner classNames="spinner1" />;
        } else {
            productDisplay = (
                <div className="card shadow w-50 mx-auto p-3">
                    <div className="d-flex">
                        <div className="float-left">
                            <img src={product.imageUrl} width="300" height="300" alt="" />
                        </div>
                        <div className="ml-5">
                            <div className="pd-name">{product.name}</div>
                            <div className="pd-desc ml-2">{product.description}</div>
                            <div className="mt-5">
                                <div className="pd-price float-left">${product.price}</div>
                                <div className="float-right">
                                    <button className="btn pd-button" onClick={()=>this.addToBasket(product.productDetails)}>
                                        <i className="fa fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="pd">
                <ToastContainer
                    autoClose={2000}
                    hideProgressBar={true} />
                <div onClick={() => this.props.history.goBack()}>
                    <i className="fa fa-arrow-circle-left"></i>
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
    { getProductById, addCartToBasket }
)(Product);