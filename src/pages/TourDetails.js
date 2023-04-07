import React from 'react';

const TourDetails = ({ tour }) => {
    return (
        <div className="tour-details">
            <img src={tour.image} alt={tour.title} />
            <div className="tour-details-content">
                <h2>{tour.title}</h2>
                <p className="tour-price">Cena: {tour.price} PLN</p>
                <p>{tour.description}</p>
                <h3>Plan podróży:</h3>
                <p>{tour.itinerary}</p>
            </div>
        </div>
    );
};

export default TourDetails;
