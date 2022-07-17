import React from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "react-paypal-button";
import { useAppContext } from "../../hooks/useAppContext";
import "./Payment.css";

function Payment () {
    const { state: { cart, buyer }, addNewOrder } = useAppContext();
    const navegate = useNavigate();

    const sumTotal = cart.reduce(
        (accumulator, currentValue) => (accumulator + currentValue.price)
    , 0);

    const paypalOptions = {
        clientId: process.env.PAYPAL_PAYMENT_CLIENT_ID,
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data,
            };
            addNewOrder(newOrder);
            navegate("/checkout/success");
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((product, index) => (
                    <div className="Payment-item" key={`Product-${index}-${product.id}`}>
                        <div className="Payment-element">
                            <h4>{product.title}</h4>
                            <span>${product.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={sumTotal}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={handlePaymentSuccess}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    );
};

export { Payment };