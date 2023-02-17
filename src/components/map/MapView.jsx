import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Marker';

const MapView = () => {
    const mapOptions = {
        scrollWheelZoom: false
    };

    return <MapContainer center={{lat: '-34.606631200677924', lng: '-58.37253634539568'}} zoom={15} {...mapOptions}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers/>
    </MapContainer>
}

export default MapView;

