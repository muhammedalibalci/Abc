import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Axios from 'axios';
import JwtDecode from 'jwt-decode';
import Spinner from '../common/spinner/Spinner';
import { withRouter, useHistory } from 'react-router-dom';
import {getCarts} from '../../actions/basketAction'
const PaymentFrom = ({addressId}) => {
  const stripe = useStripe();
  const elements = useElements();
  let history = useHistory();
  const [loading, setLoading] = useState(false)  
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setLoading(true)
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setLoading(false)
    } else {
      const id = JwtDecode(localStorage.getItem('token')).unique_name
      await Axios.post(`/api/payments/${id}`).then(res=>{
        const orderData = {
          UserId:id,
          AddressId:addressId
        }
        console.log(id);
         Axios.post(`/api/orders`,orderData)
        .then(re=>{
          setLoading(false)
          history.push('/orders');
        }).catch(setLoading(false))
      }).catch(setLoading(false))
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {loading && <Spinner classNames="spinner1"/>}
      <hr/>
      <div className="w-100 outer-payment">
        <CardElement
          className="card-element"
        />
      </div>
      <hr/>
      <button className="btn btn-sm float-right btn-pay mt-3" type="submit" disabled={!stripe}>
        <i className="fa fa-credit-card"></i> Pay
      </button>
    </form>
  );
};

export default PaymentFrom 