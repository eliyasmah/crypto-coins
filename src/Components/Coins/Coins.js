import React, { useEffect, useState } from 'react';
import CoinCart from '../CoinCart/CoinCart';
import CoinDetails from '../CoinDetails/CoinDetails';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div className=' pt-20 pb-24 mx-auto max-w-7xl bg-slate-100'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Available Crypto Currencies</h1>
            <p className='text-gray-500 text-xl text-center'>Total Coins: {coins.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
                {
                    coins.map(coin => <CoinCart
                        key={coin.id}
                        coin={coin}
                    ></CoinCart>)
                }
            </div>
        </div>
    );
};

export default Coins;