import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-center md:justify-between px-12 py-8 sticky top-0'>
            <div>
                <Link to="/" className='text-gray-600 font-sans font-bold text-2xl'>Crypto Cafe</Link>
            </div>
            <div className='flex gap-4 justify-center text-lg'>
                <Link to="/">Home</Link>
                <Link to="/homepage">Homepage</Link>
                <Link to="/coins">Coins</Link>
            </div>
        </div>
    );
};

export default Header;