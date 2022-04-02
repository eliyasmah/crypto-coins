import React from 'react';
import { Link } from 'react-router-dom';

const CoinCart = (props) => {
    const { name, image, symbol, id } = props.coin
    return (
        <div className=' w-[250px] my-4 rounded-xl shadow-lg bg-white'>
            <Link to={`/coin-details/${id}`}>
                <div className='flex justify-between px-4 py-3'>
                    <div>
                        <img className='h-16 w-16' src={image} alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-gray-600'>{name}</p>
                        <p><small className='text-xs text-gray-400'>{symbol}</small> </p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default CoinCart;