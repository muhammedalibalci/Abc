import React, { Component } from 'react'
import { BasketItem } from './BasketItem'
import { connect } from 'react-redux';
import { updateCart, deleteCartFromBasket, getCarts } from '../../actions/basketAction'
import { Summary } from './Summary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Basket.css'
import Spinner from '../common/spinner/Spinner';
import UserRoute from '../../HOC/UserRoute';
class Basket extends Component {

    state = {
        amount: 0
    }
    componentDidMount() {
        this.props.getCarts()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.basket.carts !== nextProps.basket.carts) {
            if (nextProps.basket.carts.length === 0) {
                this.props.history.push('/products');
            }

            this.totalAmount(nextProps.basket.carts)
        }
    }

    removeProduct = (e, cartId, notify) => {
        e.preventDefault();
        this.props.deleteCartFromBasket(cartId)
            .then((res) => { notify() })
    }

    increaseProduct = (e, product) => {
        e.preventDefault();
        product.quantity++;
        this.props.updateCart(product)
    }

    decreaseProduct = (e, product) => {
        e.preventDefault();
        if (product.quantity === 1) {
            this.props.deleteCartFromBasket(product.id)
            return;
        }
        product.quantity--;
        this.props.updateCart(product)
    }

    totalAmount = (carts) => {
        let amount = 0;
        carts.forEach(cart => {
            amount += cart.productDetail.product.price * cart.quantity
        });
        this.setState({
            amount
        })
    }

    render() {
        const { carts, loading } = this.props.basket
        const notify = () => toast("Product Removed Successfully !");
        let basketDisplay;

        if (loading) {
            return <Spinner classNames="spinner1" />;
        } else {
            basketDisplay = carts.map(cart => {
                return (
                    <BasketItem
                        key={cart.id}
                        cart={cart}
                        increaseProduct={e => {
                            this.increaseProduct(e, cart);
                        }}
                        decreaseProduct={e => {
                            this.decreaseProduct(e, cart);
                        }}
                        removeProduct={e => {
                            this.removeProduct(e, cart.id, notify)
                        }}
                    />
                )
            })
        }

        return (
            <div>
                <div className="text-center">
                    <ToastContainer
                        autoClose={2000}
                        hideProgressBar={true} />
                </div>
                <div className="container g-basket">
                    <div className="card shadow pb-4">
                        <div className="card-title ml-2 mt-2">
                            <i className="fa fa-shopping-bag"></i> Items in Your Bag
                    </div>
                        <hr />
                        <div className="card-body text-center">
                            {basketDisplay}
                        </div>
                        <hr />
                        <Summary 
                        carts={carts} 
                        totalAmount={this.state.amount}
                      />
                    </div >
                    <div></div>
                </div >
            </div >
        )
    }
}

const mapStateToProps = state => ({
    basket: state.basket,
})
export default connect(
    mapStateToProps,
    { getCarts, updateCart, deleteCartFromBasket }
)(UserRoute(Basket));