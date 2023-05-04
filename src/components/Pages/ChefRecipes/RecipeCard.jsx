import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import toast, { Toaster } from 'react-hot-toast';

import '@smastrom/react-rating/style.css'

const RecipeCard = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    const handleFavorite = (event) => {
        event.currentTarget.disabled = true;
        return toast.success('Successfully added in the favorite!');
    }

    return (
        <div className='shadow-lg rounded-lg relative px-5 pt-5 pb-14 overflow-hidden'>
            <h2 className='text-xl font-semibold'>{recipe_name}</h2>
            <p className='font-medium mt-2'>Ingredients:</p>
            {
                ingredients.map((ing, i) => <span key={i} className='mr-3 text-sm'>{i + 1}. {ing}</span>)
            }
            <p className='font-medium mt-2'>Cooking Method:</p>
            <p className='text-sm'>{cooking_method}</p>
            <span className='mt-3'>
                <Rating
                    style={{ maxWidth: 100 }}
                    readOnly
                    orientation="horizontal"
                    value={rating}
                /> {rating}
            </span>
            <button onClick={handleFavorite} className='py-2 px-6 bg-[#ffa200] font-semibold text-white mt-3 block w-full absolute bottom-0 left-0 disabled:bg-zinc-600'>Favorite</button>
        </div>
    );
};

export default RecipeCard;