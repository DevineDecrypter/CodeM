import React, {useState,useEffect} from 'react';
import axios from 'axios';

import Coin from './coin/Coin';
import './coin/Coin.css';

const uri = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

function Crypto(props) {

    const [coins,setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(uri).then(res => {
            setCoins(res.data);
        }).catch(error => console.error(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )


    return (
            <div className="coin-app">
                <div className="coin-search">
                    <h1 className="coin-text">Search a Currency</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input onChange={handleChange} value={search} type="text" placeholder="Search..." className="coin-input"/>
                    </form>
                </div>
                {filteredCoins.map(coin => {
                    return (
                        <Coin 
                            key={coin.id} 
                            name={coin.name} 
                            symbol={coin.symbol} 
                            image={coin.image}
                            volume={coin.total_volume}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            marketcap={coin.market_cap} />
                            
                    )
                })}
                <button className="coin-home" onClick={() => props.clicked('Home')}>Home</button>
            </div>
    )
}

export default Crypto;
