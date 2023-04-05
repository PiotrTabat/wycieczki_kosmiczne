import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getTotalPrice } = useContext(CartContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Przesyłanie danych zamówienia do serwera
        console.log(formData);
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout">
                <h2>Koszyk jest pusty. Dodaj wycieczki, aby kontynuować.</h2>
            </div>
        );
    }

    return (
        <div className="checkout">
            <h2>Realizacja zamówienia</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Imię"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nazwisko"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Adres e-mail"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numer telefonu"
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Adres"
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Miasto"
                    required
                />
                <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Kod pocztowy"
                    required
                />
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Kraj"
                    required
                />
                <button type="submit">Złóż zamówienie</button>
            </form>

        </div>
    );
};

export default Checkout;
