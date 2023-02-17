import React from 'react';
import {Marker} from 'react-leaflet';
import {IconLocation} from './IconLocation.js'

const Markers = () => {
    return (
        <Marker position={{lat: '-34.606631200677924', lng: '-58.37253634539568'}} 
        icon={IconLocation}/>
    )
}

export default Markers;