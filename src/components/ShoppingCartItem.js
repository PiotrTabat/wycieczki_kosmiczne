import React from 'react';

const ShoppingCartItem = ({ item }) => {
    return (
        <div className="shopping-cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
                <h3>{item.title}</h3>
                <p>Cena: {item.price} PLN</p>
                <p>Ilość: {item.quantity}</p>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
