import React, { useEffect, useState } from 'react';
import SpaceTourList from '../components/SpaceTourList';

const Home = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        // Tutaj powinieneś pobrać dane z API, ale dla celów demonstracyjnych użyję przykładowych danych
        const exampleData = [
            { id: 1, title: 'Wycieczka na Księżyc', price: 10000 },
            { id: 2, title: 'Wycieczka na Marsa', price: 20000 },
            { id: 3, title: 'Wycieczka na Ziemię', price: 5000 },
            { id: 4, title: 'Wycieczka na Jowisza', price: 40000 },
            { id: 5, title: 'Wycieczka na ISS', price: 8000 },
            { id: 6, title: 'Wycieczka na Słońce', price: 200000 },
            // ...
        ];
        setTours(exampleData);
    };

    return (
        <div>
            <h1>Dostępne wycieczki kosmiczne</h1>
            <SpaceTourList tours={tours} />
        </div>
    );
};

export default Home;
