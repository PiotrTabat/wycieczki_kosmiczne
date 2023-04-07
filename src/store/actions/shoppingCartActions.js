import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const UseIncrementQuantity = (itemId) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex >= 0) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity++;
        setCartItems(updatedCartItems);
    }
};

export const UseDecrementQuantity = (itemId) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex >= 0) {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[itemIndex].quantity === 1) {
            updatedCartItems.splice(itemIndex, 1);
        } else {
            updatedCartItems[itemIndex].quantity--;
        }
        setCartItems(updatedCartItems);
    }
};

export const ClearCart = () => {
    const { setCartItems } = useContext(CartContext);
    setCartItems([]);
};
