import React, { useState } from 'react';

import './App.css';
import './Components/style.css';
import Home from './Components/home';
import Time from './Components/time';
import Weather from './Components/weather';
import Crypto from './Components/crypto';

function App() {

  const [page,setPage] = useState('Home');

  switch(page){
    case 'Home':
      return <Home clicked={(e) => setPage(e)} />
    case 'Time':
      return <Time clicked={(e) => setPage(e)} />
    case 'ٌWeather':
      return <Weather clicked={(e) => setPage(e)} />
    case 'Crypto':
      return <Crypto clicked={(e) => setPage(e)} />
    default:
      return <Home clicked={(e) => setPage(e)} />
  }
}

export default App;
