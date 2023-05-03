import React from 'react';
import bgImg from '../../../assets/images/12-3.jpg'

const Home = () => {
    return (
        <>
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
            <section className='py-10'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <h2 className='mb-7 text-3xl font-bold text-center'>Chefs in Khanapina</h2>
                    <div className='grid md:grid-cols-3 gap-6'>
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
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" alt="" />
                            <h2>Mohammad Ali</h2>
                            <p><span>5</span> Years of experience</p>
                            <p><span>3</span> Recipes</p>
                            <p><span>340</span> Likes</p>
                            <button>Views Recipes</button>
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" alt="" />
                            <h2>Mohammad Ali</h2>
                            <p><span>5</span> Years of experience</p>
                            <p><span>3</span> Recipes</p>
                            <p><span>340</span> Likes</p>
                            <button>Views Recipes</button>
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" alt="" />
                            <h2>Mohammad Ali</h2>
                            <p><span>5</span> Years of experience</p>
                            <p><span>3</span> Recipes</p>
                            <p><span>340</span> Likes</p>
                            <button>Views Recipes</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;