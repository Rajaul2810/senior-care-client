import React from 'react';
import {  Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimplePayment from './SimplePayment';

const stripePromise = loadStripe('pk_test_51IgZMAF6Sm81KwUe4axuqoxyewricZKa0kccXlyI6LWtirtmNThRtuq0rDWJnve3JtSjsCiaCIivev3ho1ZoG9EB00e3XwI2qw');

const Payment = ({handlePay}) => {
    return (
        <Elements stripe={stripePromise}>
           <SimplePayment handlePay={handlePay}></SimplePayment>
        </Elements>
    );
};

export default Payment;