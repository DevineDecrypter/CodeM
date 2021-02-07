import React, { useState } from 'react'

import './style.css';
import { openweathermap } from '../ApiKeys';

const weather_uri = 'http://api.openweathermap.org/data/2.5/';

function Weather(props) {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [coord,setCoord] = useState({});
    const [components, setComponents] = useState([]);

    const citySearchHandler = event => {
            setComponents([]);
            fetch(`${weather_uri}weather?q=${city}&units=metric&appid=${openweathermap}`)
            .then(res => res.json())
            .then(result => {
                setCity('');
                setWeather(result);
                setCoord(result.coord);
            });
            // fetch(`${weather_uri}air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${openweathermap}`)
            //     .then(res => res.json())
            //     .then(result => {
            //         const list = result.list[0].components;
            //         const objectArray = Object.entries(list);
            //         objectArray.forEach(([key, value]) => {
            //         setComponents(oldComponents => [...oldComponents, [key,value]]);
            //     })
            // console.log('search done');
            // });
    }

    let render;

    if (weather.cod === "404") {
        render = <h1>City not found.</h1>
    } else if (typeof weather.name != "undefined") {
        render = (<div>
            <h1>{weather.name}</h1>
            <h2>Temprature: {weather.main.temp}°c // feels like {weather.main.feels_like}°c // minimum temp: {weather.main.temp_min}°c // maximum temp: {weather.main.temp_max}°c</h2>
            <p>Pressure: {weather.main.pressure} // Weather: {weather.weather[0].main}</p>
            <hr/>
            {/* <h2>Pollution: {components.map(item => <p key={item}>{item[0]}: {item[1]}</p>)}</h2> */}
         </div>)
    }

    return (
        <div className="style">
            <input placeholder="Search City..." value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={citySearchHandler} disabled={!city}>Search</button>
            {render}
            <button onClick={() => props.clicked('Home')}>Home</button>
        </div>
    )
}

export default Weather;
