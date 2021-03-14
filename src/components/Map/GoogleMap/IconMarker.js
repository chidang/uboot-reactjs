import React from 'react';
import mapMarker from './map-marker.svg';

const IconMarker = (props) => {
    return (
        <span>
            <img src={mapMarker} alt={props.text}/>
        </span >
    );
}

export default IconMarker;
