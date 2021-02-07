import React from 'react'

import './style.css';

function Crypto(props) {
    return (
        <div className="style">
            <button onClick={() => props.clicked('Home')}>Home</button>
        </div>
    )
}

export default Crypto;
