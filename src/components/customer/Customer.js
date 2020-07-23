import React, { Component } from 'react'
import { CustomerInfo } from './CustomerInfo'
import { AddressTable } from './AddressTable'
import { getCustomer, deleteCustomerAddress } from '../../actions/customerAction'
import jwtDecode from "jwt-decode";
import { connect } from 'react-redux';
import './Customer.css'
import Spinner from '../common/spinner/Spinner';
import AddAddress from './AddAddress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Customer extends Component {

    state = {
        addressSection: false
    }
    componentDidMount() {
        const id = jwtDecode(localStorage.getItem('token')).unique_name
        this.props.getCustomer(id)
    }

    deleteAddress = (e, id) => {
        e.preventDefault();

        this.props.deleteCustomerAddress(id).then(res => {
            const userId = jwtDecode(localStorage.getItem('token')).unique_name
            this.props.getCustomer(userId)
            this.notify()
        })

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
    notify = () => toast.error("Product Deleted Successfully !");

    render() {
        const { customer, loading } = this.props.customer
        let addressTableDisplay;
        if (loading) {
            return <Spinner classNames="spinner1" />;
        } else {
            addressTableDisplay = (
                <AddressTable
                    addresses={customer.addresses
                         && customer.addresses.filter(a => a.isDeleted === false)}
                    deleteAddress={this.deleteAddress}
                />
            )
        }

        return (
            <div className="my-account">
                <div className="container pt-4">
                    <CustomerInfo customer={this.props.customer.customer} />
                    <ToastContainer
                        autoClose={2000}
                        hideProgressBar={true} />
                    <AddAddress
                        closeModal={this.closeModal}
                        modalIsOpen={this.state.addressSection}
                        addresses={this.props.customer.addresses} />
                    <div className="d-flex ml-4 mt-4">
                        <button className="btn btn-o mr-4" onClick={this.openModal}>
                            <i className="fa fa-map-marker"></i> Add Address
                        </button>
                        <button className="btn btn-o" onClick={() => this.props.history.push('/orders')}>
                            <i className="fa fa-shopping-basket"></i> My Shopping
                        </button>
                    </div>
                    {addressTableDisplay}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    customer: state.customer
});
export default connect(
    mapStateToProps,
    { getCustomer, deleteCustomerAddress }
)(Customer);