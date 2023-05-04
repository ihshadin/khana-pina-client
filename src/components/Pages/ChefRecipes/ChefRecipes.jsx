import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { AuthContext } from '../../providers/AuthProvider';

const ChefRecipes = () => {
    const { id } = useParams();
    const chef = useLoaderData();
    const { loading } = useContext(AuthContext);

    const { chef_picture, chef_name, description, likes, recipes, years_of_experience } = chef;

    if (loading) {
        return <div className="radial-progress bg-primary text-primary-content border-4 border-primary absolute start-1/2 -translate-x-1/2" style={{ "--value": 70 }}>70%</div>;
    }

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
                    <h2 className='mb-7 text-3xl font-bold text-center'>Recipes</h2>
                    <div className='grid md:grid-cols-3 gap-7'>
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