import React from 'react';
import axios from 'axios';
import { usePosition } from 'use-position';


function Geolocation() {
    const {
        latitude,
        longitude
    } = usePosition();
    return (latitude, longitude)
}

let days = 1

function Weather() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat={Geolocation.latitude}&lon={Geolocation.longitude}&cnt={days}&appid=c95d5ac1786635e9beb26c854ab7abde').then()

    return (
        <Weather>
            <h1>Hello</h1>
        </Weather>
    );
}

export default Weather;
