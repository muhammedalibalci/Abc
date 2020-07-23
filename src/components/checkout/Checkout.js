import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCustomer } from '../../actions/customerAction'
import { getCarts } from '../../actions/basketAction'
import JwtDecode from 'jwt-decode';
import Spinner from '../common/spinner/Spinner';
import { AddressSection } from './AddressSection';
import './Checkout.css'
import { Summary } from './Summary';
import AddAddress from '../customer/AddAddress';
import Payment from './Payment';

class Checkout extends Component {

    state = {
        currentAddress: {},
        addressSection: false,
        amount: 0
    }

    componentDidMount() {
        const id = JwtDecode(localStorage.getItem('token')).unique_name
        this.props.getCustomer(id)
        this.props.getCarts()

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.basket.carts !== nextProps.basket.carts) {
            if (this.props.basket.carts.length === 0) {
                this.props.history.push('/products')
            }
            this.totalAmount(nextProps.basket.carts)
        }
    }

    openModal = () => {
        this.setState({
            addressSection: true
        })
    }

    closeModal = () => {
        this.setState({
            addressSection: false
        })
    }
    onClickCurrentAddress = (currentAddress) => {
        this.setState({
            currentAddress
        })
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
        const { customer, loading } = this.props.customer
        const { currentAddress, amount } = this.state
        let addressTableDisplay;
        if (loading) {
            return <Spinner classNames="spinner1" />;
        } else {
            addressTableDisplay = (
                <AddressSection
                    addresses={customer.addresses &&
                        customer.addresses.filter(a => a.isDeleted === false)}
                    onClickCurrentAddress={this.onClickCurrentAddress}
                    openModal={this.openModal}
                    currentAddress={currentAddress}
                />

            )
        }
        return (
            <div>
                <h4 className="text-center mt-2">Checkout</h4>
                <div className="row container mt-4">
                    {addressTableDisplay}
                    <AddAddress
                        closeModal={this.closeModal}
                        modalIsOpen={this.state.addressSection}
                        addresses={this.props.customer.addresses} />
                    <Summary
                        carts={this.props.carts}
                        currentAddress={currentAddress}
                        totalAmount={amount} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    basket: state.basket,
    customer: state.customer,
    carts: state.basket.carts
});
export default connect(
    mapStateToProps,
    { getCustomer, getCarts }
)(Checkout);