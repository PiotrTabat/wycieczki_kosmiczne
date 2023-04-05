import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SpaceTourDetails.css';

const SpaceTourDetails = () => {
    const params = useParams();
    const id = params.id;
    const [tourDetails, setTourDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            await fetchTourDetails(id);
        };

        fetchData();
    }, [id]);



    const fetchTourDetails = async (tourId) => {
        // Tutaj dane z API, ale dla celów demo przykładowe dane
        const exampleData = {
            id: tourId,
            title: 'Wycieczka na Księżyc',
            price: 10000,
            image: 'https://example.com/moon-tour-image.jpg',
            description: 'Odwiedź Księżyc i doświadcz niesamowitej przygody w przestrzeni kosmicznej.',
            itinerary: 'Dzień 1: Start, Dzień 2: Przylot na Księżyc, Dzień 3: Zwiedzanie, Dzień 4: Powrót na Ziemię',
        };
        setTourDetails(exampleData);
    };

    if (!tourDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-tour-details">
            <img src={tourDetails.image} alt={tourDetails.title} className="space-tour-details-image" />
            <h2 className="space-tour-details-title">{tourDetails.title}</h2>
            <p className="space-tour-details-price">Cena: {tourDetails.price} PLN</p>
            <p className="space-tour-details-description">{tourDetails.description}</p>
            <h3 className="space-tour-details-itinerary-title">Plan podróży:</h3>
            <p className="space-tour-details-itinerary">{tourDetails.itinerary}</p>
        </div>
    );
};

export default SpaceTourDetails;
