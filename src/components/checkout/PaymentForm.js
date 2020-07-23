import React  from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Axios from 'axios';
import JwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { getCarts } from '../../actions/basketAction'
import { connect } from 'react-redux';


const PaymentFrom = ({ addressId, getCarts, onClickPay }) => {
  const stripe = useStripe();
  const elements = useElements();
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const id = JwtDecode(localStorage.getItem('token')).unique_name
      await Axios.post("https://abc-app-api.azurewebsites.net"+`/api/payments/${id}`)

      const orderData = {
        UserId: id,
        AddressId: addressId
      }

      await Axios.post("https://abc-app-api.azurewebsites.net"+`/api/orders`, orderData)
        .then(re => {
          getCarts();
          history.push('/orders');
        })


    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <hr />
        <div className="w-100 outer-payment">
          <CardElement
            className="card-element"
          />
        </div>
        <hr />
        <button
          className="btn btn-sm float-right btn-pay mt-3"
          type="submit"
          onClick={onClickPay}
          disabled={!stripe}>
          <i className="fa fa-credit-card"></i> Pay
      </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { getCarts }
)(PaymentFrom);