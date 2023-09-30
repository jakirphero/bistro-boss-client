import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import './CheckOutForm.css'

const CheckOutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transaction, setTransaction] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('stripe error', error);
            setError(error.message);
        }
        else {
            setError('')
            console.log('stripe payment', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent);

        setProcessing(true)

        if (paymentIntent.status === 'succeeded') {
            setTransaction(paymentIntent.id)
            // Save to payment info to database
            const payment = {
                email: user?.email,
                TransactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItm),
                status: 'services pending',
                itemNames: cart.map(item => item.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        //display data
                    }
                })

        }

    }

    return (
        <>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {error && <p className="text-red-400 text-center mt-4">{error}</p>}
            {transaction && <p className="text-green-400 text-center mt-4">Transaction Complete with TransactionID: {transaction}</p>}
        </>
    );
};

export default CheckOutForm;