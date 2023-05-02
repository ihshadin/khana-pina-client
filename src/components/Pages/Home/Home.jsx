import React from 'react';
import bgImg from '../../../assets/images/12-3.jpg'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            {/* Banner Area */}
            <div className='px-3 xl:px-0 xl:container mx-auto min-h-[70vh] items-center flex'>
                <div className=''>
                    <h4 className='text-xl font-semibol text-white'>create a delicious taste</h4>
                    <h2 className='text-2xl md:text-5xl uppercase font-bold text-[#ffa200]'>Hot Dog Sandwich for <br />Breakfast</h2>
                    <p className='w-full md:w-2/4 mt-4 text-zinc-300 text-base'>Food recipes are instructions for preparing dishes, including ingredients and cooking times. They cater to different tastes and are easily accessible online.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;