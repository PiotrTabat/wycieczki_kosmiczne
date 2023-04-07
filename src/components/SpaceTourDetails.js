import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './SpaceTourDetails.css';


const SpaceTourDetails = () => {
    const params = useParams();
    const id = params.id;
    const [tourDetails, setTourDetails] = useState({});

    useEffect(() => {
        fetchTourDetails(id);
    }, [id]);

    const fetchTourDetails = async (id) => {
        const exampleData = [
            {
                image: 'https://ocdn.eu/pulscms-transforms/1/G-lk9kpTURBXy83YjQ4YmNiZTE4NTFkMjNiMTBjOTFlZjA5MGY5MzhkYS5qcGeTlQMANc0Gxs0Dz5MFzQSwzQKkkwmmODljMzdlBt4AAaEwAQ/superksiezyc-zdjecie-ilustracyjne.jpeg',
                id: 1,
                title: 'Wycieczka na Księżyc',
                price: 10000,
                itinerary: '1. Przygotowanie do lotu\n2. Start\n3. Przylot na Księżyc\n4. Przejście do hotelu\n5. Obserwacja widoków\n6. Powrót do Ziemi'
            },

            {
                image: 'https://ocdn.eu/pulscms-transforms/1/pmIk9kuTURBXy85OGQ0N2FjNS1lYjBhLTQ4NGQtODA2Ni1hYWY0ZDNkNzFmOGMuanBlZ5GTAs0FRs0DQN4AAaEwBQ',
                id: 2,
                title: 'Wycieczka na Marsa',
                price: 20000,
                itinerary: '1. Przygotowanie do lotu\n2. Start\n3. Przylot na Marsa\n4. Przejście do hotelu\n5. Obserwacja widoków\n6. Powrót do Ziemi'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUBjZ1BYg8vGo0xHqSRxAR1EApKV4xfBfUGEQdao88pgOsufDFm2xvuoZpmcI1-8R5Lo&usqp=CAU',
                id: 3,
                title: 'Wycieczka na Ziemię',
                price: 5000,
                itinerary: '1. Przygotowanie do lotu\n2. Start\n3. Przylot na Ziemię\n4. Przejście do hotelu\n5. Obserwacja widoków\n6. Powrót do Ziemi'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx50DMQ6VqdG67OUhas3SZlX6IaF6P1RBdXcfn-MUOVLZO25mC2F1fjxpIyKLiLNP7YJM&usqp=CAU',
                id: 4,
                title: 'Wycieczka na Jowisza',
                price: 40000,
                itinerary: '1. Przygotowanie do lotu\n2. Start\n3. Przylot na Jowisza\n4. Przejście do hotelu\n5. Obserwacja widoków\n6. Powrót do Ziemi'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRziL9fmO3wn_wavkE99_hhd3dR2UdZlJP491WBGYCV0osOTqLnVkXvt797IpGz7zpSqg&usqp=CAU',
                id: 5,
                title: 'Wycieczka na ISS',
                price: 8000,
                itinerary: '1. Przygotowanie do lotu\n2. Start\n3. Przylot na ISS\n4. Przejście do hotelu\n5. Obserwacja widoków\n6. Powrót do Ziemi'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvahF3l_UgwjMKMkbkNehGxJCpcTnGvOEwguUWPaBvI61Qy3-J04Rf_DC40Fi_GLJ1Tr8&usqp=CAU',
                id: 6,
                title: 'Wycieczka na Słońce',
                price: 200000,
                itinerary: '1. Przygotowanie do lotu\n2. Start\n3. Przylot na Słońce\n4. Przejście do hotelu\n5. Obserwacja widoków\n6. Powrót do Ziemi'
            },
        ];
        const foundTour = exampleData.find(tour => tour.id === parseInt(id));
        setTourDetails(foundTour);
    };

    if (!tourDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-tour-details">
            <img src={tourDetails.image} alt={tourDetails.title} className="space-tour-details-image"/>
            <h2 className="space-tour-details-title">{tourDetails.title}</h2>
            <p className="space-tour-details-price">Cena: {tourDetails.price} PLN</p>
            <p className="space-tour-details-description">{tourDetails.description}</p>
            <h3 className="space-tour-details-itinerary-title">Plan podróży:</h3>
            <p className="space-tour-details-itinerary">{tourDetails.itinerary}</p>
        </div>
    );
};

export default SpaceTourDetails;
