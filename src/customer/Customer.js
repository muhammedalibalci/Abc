import React, { Component } from 'react'
import { CustomerInfo } from './CustomerInfo'
import { AddressTable } from './AddressTable'
import { getCustomer, deleteCustomerAddress } from '../actions/customerAction'
import jwtDecode from "jwt-decode";
import { connect } from 'react-redux';
import './Customer.css'
import Spinner from '../components/common/spinner/Spinner';
import { AddAddress } from './AddAddress';

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

        this.props.deleteCustomerAddress(id)
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

    render() {
        const { addresses, loading } = this.props.customer
        let addressTableDisplay;

        if (loading) {
            return <Spinner classNames="spinner1" />;
        } else {
            addressTableDisplay = (
                addresses && addresses.map(address => {
                    return <AddressTable
                        key={address.id}
                        address={address}
                        deleteAddress={e => {
                            this.deleteAddress(e, address.id)
                        }} />
                })
            )
        }

        return (
            <div className="my-account">
                <div className="container pt-4">
                    <CustomerInfo />
                    <AddAddress
                        closeModal={this.closeModal}
                        modalIsOpen={this.state.addressSection} />
                    <div className="d-flex ml-4 mt-4">
                        <button className="btn btn-o mr-4" onClick={this.openModal}>
                            <i className="fa fa-map-marker"></i> Add Address
                        </button>
                        <button className="btn btn-o" >
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