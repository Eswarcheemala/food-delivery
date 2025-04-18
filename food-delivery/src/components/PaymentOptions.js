import React from 'react';

function PaymentOptions({ onNext }) {
    const handlePayment = (method) => {
        alert(`Payment selected: ${method}`);
        onNext();
    };

    return (
        <div className="payment-options">
            <h2>Select Payment Method</h2>
            <button onClick={() => handlePayment('UPI')}>UPI</button>
            <button onClick={() => handlePayment('Cash on Delivery')}>Cash on Delivery</button>
        </div>
    );
}

export default PaymentOptions;