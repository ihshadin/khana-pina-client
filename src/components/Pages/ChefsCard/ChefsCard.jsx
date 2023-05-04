import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { id, chef_picture, chef_name, years_of_experience, likes, recipes } = chef;

    return (
        <div className='shadow-lg rounded-lg'>
            <LazyLoadImage
                src={chef_picture}
                className='rounded-lg w-full h-64 object-cover'
                effect='blur'
            />
            {/* <img className='rounded-lg w-full h-64 object-cover' src={chef_picture} alt="" /> */}
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>{chef_name}</h2>
                <p className='text-zinc-500'><span className='font-semibold text-[#ffa200]'>{years_of_experience}</span> Years of experience</p>
                <p className='text-zinc-500'><span className='font-semibold text-[#ffa200]'>{likes}</span> Likes</p>
                <p className='text-zinc-500'><span className='font-semibold text-[#ffa200]'>{recipes.length}</span> Recipes</p>
                <Link to={`chef-recipes/${id}`} className='mt-3 py-2 text-center bg-[#ffa200] block font-medium text-white'>Views Recipes</Link>
            </div>
        </div>
    );
};

export default ChefsCard;