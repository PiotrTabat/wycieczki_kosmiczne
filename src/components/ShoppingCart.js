import React, { useContext } from 'react';
import './ShoppingCart.css';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
    const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="shopping-cart">
                <h2>Koszyk jest pusty</h2>
            </div>
        );
    }

    return (
        <div className="shopping-cart">
            <h2>Twój koszyk</h2>
            <ul className="shopping-cart-list">
                {cartItems.map((item) => (
                    <li key={item.id} className="shopping-cart-item">
                        <span className="shopping-cart-item-title">{item.title}</span>
                        <span className="shopping-cart-item-price">{item.price} PLN</span>
                        <button className="shopping-cart-item-remove" onClick={() => removeFromCart(item.id)}>
                            Usuń
                        </button>
                    </li>
                ))}
            </ul>
            <div className="shopping-cart-summary">
                <p>Łączna kwota: {getTotalPrice()} PLN</p>
                <button className="shopping-cart-checkout">Zamów</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
