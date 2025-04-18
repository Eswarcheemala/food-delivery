import React from 'react';
import './FoodMenu.css';

function FoodMenu({ onNext }) {
    const foodItems = [
        { name: 'Noodles', image: 'https://example.com/noodles.jpg' },
        { name: 'Biryani', image: 'https://example.com/biryani.jpg' },
        { name: 'Pizza', image: 'https://example.com/pizza.jpg' },
        { name: 'Burger', image: 'https://example.com/burger.jpg' },
    ];

    return (
        <div className="food-menu">
            <h2>Our Menu</h2>
            <div className="food-items">
                {foodItems.map((item, index) => (
                    <div key={index} className="food-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <button onClick={() => alert(`You ordered: ${item.name}`)}>Order Now</button>
                    </div>
                ))}
            </div>
            <button onClick={onNext}>Payment Options</button>
        </div>
    );
}

export default FoodMenu;