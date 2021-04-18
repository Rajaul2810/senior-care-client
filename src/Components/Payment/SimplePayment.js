import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const SimplePayment = ({handlePay}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [payment , setPayment] = useState(null);

    
              
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
      
        

    if (!stripe || !elements) {
      
      return;
    }

   
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPayment(paymentMethod); 
       handlePay(paymentMethod.id);
    }
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default SimplePayment;