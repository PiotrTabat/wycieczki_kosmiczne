import React, {useEffect, useState} from 'react';
import SpaceTourList from '../components/SpaceTourList';


const Home = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {

        // Tutaj pobrać dane z API, dla celów demo przykładowe dane.

        const exampleData = [
            {image: 'https://ocdn.eu/pulscms-transforms/1/G-lk9kpTURBXy83YjQ4YmNiZTE4NTFkMjNiMTBjOTFlZjA5MGY5MzhkYS5qcGeTlQMANc0Gxs0Dz5MFzQSwzQKkkwmmODljMzdlBt4AAaEwAQ/superksiezyc-zdjecie-ilustracyjne.jpeg',id: 1, title: 'Wycieczka na Księżyc', price: 10000},
            {image: 'https://ocdn.eu/pulscms-transforms/1/pmIk9kuTURBXy85OGQ0N2FjNS1lYjBhLTQ4NGQtODA2Ni1hYWY0ZDNkNzFmOGMuanBlZ5GTAs0FRs0DQN4AAaEwBQ',id: 2, title: 'Wycieczka na Marsa', price: 20000},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUBjZ1BYg8vGo0xHqSRxAR1EApKV4xfBfUGEQdao88pgOsufDFm2xvuoZpmcI1-8R5Lo&usqp=CAU',id: 3, title: 'Wycieczka na Ziemię', price: 5000},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx50DMQ6VqdG67OUhas3SZlX6IaF6P1RBdXcfn-MUOVLZO25mC2F1fjxpIyKLiLNP7YJM&usqp=CAU',id: 4, title: 'Wycieczka na Jowisza', price: 40000},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRziL9fmO3wn_wavkE99_hhd3dR2UdZlJP491WBGYCV0osOTqLnVkXvt797IpGz7zpSqg&usqp=CAU',id: 5, title: 'Wycieczka na ISS', price: 8000},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvahF3l_UgwjMKMkbkNehGxJCpcTnGvOEwguUWPaBvI61Qy3-J04Rf_DC40Fi_GLJ1Tr8&usqp=CAU',id: 6, title: 'Wycieczka na Słońce', price: 200000},

        ];
        setTours(exampleData);
    };

    return (

        <div>
            <SpaceTourList tours={tours}/>
        </div>
    );
};

export default Home;
