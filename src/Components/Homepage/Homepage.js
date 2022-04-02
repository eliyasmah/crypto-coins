import React from 'react';

const Homepage = () => {
    return (
        <div className='h-[80vh] bg-slate-100 flex flex-col justify-center items-center'>
            <h1 className='text-xl md:text-5xl text-gray-600'>welcome to CRYPTO CAFE</h1>
            <button className='mt-3 bg-cyan-600 text-white py-3 px-10 rounded-full'>Explore now</button>
        </div>
    );
};

export default Homepage;