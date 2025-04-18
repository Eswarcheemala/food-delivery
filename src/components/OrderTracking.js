import React from 'react';

function OrderTracking({ onNext }) {
    return (
        <div className="order-tracking">
            <h2>Track Your Order</h2>
            <p>Your order is being prepared...</p>
            <button onClick={onNext}>Order Details</button>
        </div>
    );
}

export default OrderTracking;