import React, { useState } from 'react';

import './App.css';
import './Components/style.css';
import Home from './Components/Home';
import Time from './Components/Time';
import Weather from './Components/Weather';
import Crypto from './Components/Crypto';

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
