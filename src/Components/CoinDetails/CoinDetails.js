import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                console.log(data)

            })
    }, [id])
    return (
        <div>
            <div>
                <h1>General Info</h1>
                <p>Coin name: {coin.name}</p>
                <p>Market cap rank: {coin.market_cap_rank}</p>
                <p>Origin: </p>
                <p>Contract address: {coin.contract_address}</p>
                <p>Hashing Algorithm: {coin.hashing_algorithm}</p>
                <p>Genesis Date: {coin.genesis_date}</p>
            </div>
            <div>
                <img src={coin.image?.large} alt="" />
            </div>
        </div>
    );
};

export default CoinDetails;