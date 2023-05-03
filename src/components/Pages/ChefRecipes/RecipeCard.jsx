import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const RecipeCard = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    return (
        <div className='shadow-lg rounded-lg relative px-5 pt-5 pb-14 overflow-hidden'>
            <h2 className='text-xl font-semibold'>{recipe_name}</h2>
            <p className='font-medium mt-2'>Ingredients:</p>
            {
                ingredients.map((ing, i) => <span key={i} className='mr-3 text-sm'>{i + 1}. {ing}</span>)
            }
            <p className='font-medium mt-2'>Cooking Method:</p>
            <p className='text-sm'>{cooking_method}</p>
            <p className='mt-3'>
                <Rating
                    style={{ maxWidth: 100 }}
                    readOnly
                    orientation="horizontal"
                    value={rating}
                /> {rating}
            </p>
            <button className='py-2 px-6 bg-[#ffa200] font-semibold text-white mt-3 block w-full absolute bottom-0 left-0'>Favorite</button>
        </div>
    );
};

export default RecipeCard;