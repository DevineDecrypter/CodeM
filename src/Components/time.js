import React, { useState } from 'react'

import './style.css';

function Time(props) {

    const [time, setTime] = useState(Date().toLocaleString());

    return (
        <div className="style">
            <h1>{time}</h1>
            <button onClick={() => props.clicked('Home')}>Home</button>
        </div>
    )
}

export default Time;
