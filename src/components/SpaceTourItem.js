import React, {useContext} from 'react';
import './SpaceTourItem.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const SpaceTourItem = ({ tour }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleMoreInfo = () => {
        navigate(`/tour/${tour.id}`);
    };

    const handleAddToCart = () => {
        addToCart(tour);
    };

    return (
        <div className="space-tour-item">
            <img src={tour.image} alt={tour.title} className="space-tour-image" />
            <h3 className="space-tour-title">{tour.title}</h3>
            <p className="space-tour-price">Cena: {tour.price} PLN</p>
            <p className="space-tour-description">{tour.description}</p>
            <button className="space-tour-button" onClick={handleMoreInfo}>
                Więcej informacji
            </button>
            <button className="space-tour-button" onClick={handleAddToCart}>
                Dodaj do koszyka
            </button>
        </div>
    );
};

export default SpaceTourItem;
