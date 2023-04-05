import React from 'react';
import SpaceTourItem from './SpaceTourItem';
import './SpaceTourList.css';

const SpaceTourList = ({ tours }) => {
    return (
        <div className="space-tour-list">
            {tours.map((tour) => (
                <SpaceTourItem key={tour.id} tour={tour} />
            ))}
        </div>
    );
};

export default SpaceTourList;
