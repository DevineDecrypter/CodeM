import React from 'react'

import './home.css';

function Home(props) {
    return (
        <div className="home">
            <button onClick={() => props.clicked('Time')}>Time</button>
            <button onClick={() => props.clicked('ٌWeather')}>Weather</button>
            <button onClick={() => props.clicked('Crypto')}>Crypto</button>
        </div>
    )
}

export default Home;
