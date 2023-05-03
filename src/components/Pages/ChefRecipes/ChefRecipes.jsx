import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipes = () => {
    const { id } = useParams();
    const chef = useLoaderData();

    const { chef_picture, chef_name, description, likes, recipes, years_of_experience } = chef;

    return (
        <>
            <section className='py-12'>
                <div className='px-3 xl:px-0 xl:container mx-auto md:flex gap-6 items-center justify-center'>
                    <img className='w-64 h-64 object-cover rounded-full flex-shrink-0' src={chef_picture} alt="" />
                    <div className='mt-8 md:mt-0'>
                        <h2 className='text-4xl font-semibold'>{chef_name}</h2>
                        <p className='text-zinc-500 mt-1'>{description}</p>
                        <p className='text-zinc-500 mt-5'><span className='font-semibold text-[#ffa200]'>{years_of_experience}</span> Years of experience</p>
                        <p className='text-zinc-500 mt-1'><span className='font-semibold text-[#ffa200]'>{likes}</span> Likes</p>
                        <p className='text-zinc-500 mt-1'><span className='font-semibold text-[#ffa200]'>{recipes.length}</span> Recipes</p>
                    </div>
                </div>
            </section>
            <section className='py-12'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {
                            recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChefRecipes;