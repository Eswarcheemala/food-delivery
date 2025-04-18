import React, { useState } from 'react';
import Welcome from './components/Welcome';
import FoodMenu from './components/FoodMenu';
import OrderTracking from './components/OrderTracking';
import PaymentOptions from './components/PaymentOptions';
import OrderDetails from './components/OrderDetails';

function App() {
    const [currentDashboard, setCurrentDashboard] = useState('welcome');

    const renderDashboard = () => {
        switch (currentDashboard) {
            case 'welcome':
                return <Welcome onNext={() => setCurrentDashboard('food-menu')} />;
            case 'food-menu':
                return <FoodMenu onNext={() => setCurrentDashboard('payment-options')} />;
            case 'payment-options':
                return <PaymentOptions onNext={() => setCurrentDashboard('order-tracking')} />;
            case 'order-tracking':
                return <OrderTracking onNext={() => setCurrentDashboard('order-details')} />;
            case 'order-details':
                return <OrderDetails />;
            default:
                return <Welcome onNext={() => setCurrentDashboard('food-menu')} />;
        }
    };

    return <div className="App">{renderDashboard()}</div>;
}

export default App;