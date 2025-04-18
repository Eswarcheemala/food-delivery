import React from 'react';

function Welcome({ onNext }) {
    return (
        <div className="welcome">
            <h1>Welcome to Food Delivery App</h1>
            <button onClick={onNext}>Next</button>
        </div>
    );
}

export default Welcome;