import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='md:flex justify-center md:justify-between px-12 py-8 sticky top-0'>
            <div>
                <Link to="/" className='text-gray-600 font-sans font-bold text-2xl'>Crypto Cafe</Link>
            </div>
            <div className='flex gap-4 justify-center text-lg'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/coins">Coins</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;