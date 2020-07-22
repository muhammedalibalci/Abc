import React, { Component } from 'react'
import Modal from 'react-modal';
import { getCustomer,addCustomerAddress } from '../actions/customerAction'
import { AddAddressForm } from './AddAddressForm';
import { connect } from 'react-redux';
import Spinner from '../components/common/spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JwtDecode from 'jwt-decode';
class AddAddress extends Component {
    state = {
        fullName: '',
        address1: '',
        postCode: '',
        city: '',
        phone: '',
        errors: {}
    }
    componentWillMount() {
        Modal.setAppElement('body');
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
        const { fullName, address1, postCode, city, phone } = this.state
        const addressData = {
            fullName,
            address1,
            postCode,
            city,
            phone
        }
        this.props.addCustomerAddress(addressData)
            .then((res) => {
                const userId = JwtDecode(localStorage.getItem('token')).unique_name
                this.props.getCustomer(userId)
                this.notify()
                this.props.closeModal()
            })

        if (this.props.errors.errors.length === 0) {
            this.props.closeModal()
        }
    }
    notify = () => toast.success("Product Added Successfully !");

    render() {
        const { fullName, address1, postCode, city, phone } = this.state
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                className="modal-content"
                contentLabel="Example Modal"
            >
                <h3 className="text-center">Add Address</h3>
                {
                    this.props.customer.add_loading && <Spinner classNames="spinner2" />
                }
                <ToastContainer
                    autoClose={2000}
                    hideProgressBar={true} />
                <AddAddressForm
                    fullName={fullName}
                    address1={address1}
                    postCode={postCode}
                    city={city}
                    phone={phone}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    errors={this.props.errors.errors}
                    loading={this.props.customer.add_loading}
                />
            </Modal>
        )
    }
}
const mapStateToProps = state => ({
    customer: state.customer,
    errors: state.errors
})
export default connect(mapStateToProps, { getCustomer, addCustomerAddress })(AddAddress);