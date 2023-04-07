import React, { useContext } from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import { CartContext } from '../context/CartContext';
import { UseIncrementQuantity, UseDecrementQuantity, ClearCart } from '../store/actions/shoppingCartActions';
import './ShoppingCardPage.css';


const ShoppingCartPage = () => {
    const { cartItems, getTotalPrice } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="shopping-cart-page">
                <h2>Koszyk jest pusty</h2>
            </div>
        );
    }

    return (
        <div className="shopping-cart-page">
            <h2>Twój koszyk</h2>
            <div className="shopping-cart-items">
                {cartItems.map((item) => (
                    <ShoppingCartItem key={item.id} item={item} onIncrement={UseIncrementQuantity} onDecrement={UseDecrementQuantity} />
                ))}
            </div>
            <div className="shopping-cart-summary">
                <p>Łączna kwota: {getTotalPrice()} PLN</p>
                <button className="shopping-cart-checkout">Zamów</button>
                <button className="shopping-cart-clear" onClick={ClearCart}>Wyczyść koszyk</button>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
