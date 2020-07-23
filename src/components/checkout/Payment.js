import React, {  Component } from 'react'
import PaymentForm from './PaymentForm'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51GyGErFDEh5KScAfvh0uFXbEKhPScjoa5umpfnNm3eJQlYPCTFerCNZJ8XzmqRmcZk4QsvFziDNojyX8Vht7wVRk00sOYCS8qQ');

class Payment extends Component {

    render() {
        return (
            <Elements stripe={stripePromise}>
                <PaymentForm
                    handleSubmit={this.handleSubmit}
                    addressId = {this.props.addressId}
                />
            </Elements>
        )
    }
}

export default Payment



