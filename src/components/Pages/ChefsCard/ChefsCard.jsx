import React from 'react';

const ChefsCard = () => {
    return (
        <div className='shadow-lg rounded-lg'>
            <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" alt="" />
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>Mohammad Ali</h2>
                <p className='text-zinc-500'><span className='font-semibold text-[#ffa200]'>5</span> Years of experience</p>
                <p className='text-zinc-500'><span className='font-semibold text-[#ffa200]'>340</span> Likes</p>
                <p className='text-zinc-500'><span className='font-semibold text-[#ffa200]'>3</span> Recipes</p>
                <button className='mt-3 py-2 px-5 bg-[#ffa200] ms-auto block font-medium text-white'>Views Recipes</button>
            </div>
        </div>
    );
};

export default ChefsCard;