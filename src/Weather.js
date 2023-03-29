import React, { useState } from 'react';
import axios from 'axios';
import { usePosition } from 'use-position';


function Weather() {

    const {
        latitude,
        longitude
    } = usePosition();

    let days = 1;

    const [dayWeather, setWeather] = useState([]);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=${days}&appid=c95d5ac1786635e9beb26c854ab7abde`).then(res => {
        console.log(res);
        setWeather(res.data);
    })

    return (
        dayWeather.map(weather => <p>{weather.main}</p>)
    );
}

export default Weather;
