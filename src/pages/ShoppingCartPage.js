import React from 'react';
import ShoppingCartItem from "../components/ShoppingCartItem";
import { CartContext } from '../context/CartContext';
const ShoppingCartPage = () => {
    return (
        <div>
            <h2>Twój koszyk</h2>
            <p>Tutaj znajdują się produkty, które dodałeś do swojego koszyka.</p>
        </div>
    );
};

export default ShoppingCartPage;
