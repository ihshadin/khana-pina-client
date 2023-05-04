import React, { useContext, useEffect, useState } from 'react';
import bgImg from '../../../assets/images/12-3.jpg'
import ChefsCard from '../ChefsCard/ChefsCard';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const { chefs, loading } = useContext(AuthContext);

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
            {/* Chefs Area */}
            <section className='py-12'>
                <div className='px-3 xl:px-0 xl:container mx-auto relative'>
                    <h2 className='mb-7 text-3xl font-bold text-center'>Chefs in Khanapina</h2>
                    {
                        loading ?
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary absolute start-1/2 -translate-x-1/2" style={{ "--value": 70 }}>70%</div>
                            : <div className='grid md:grid-cols-3 gap-6'>
                                {
                                    chefs.map(chef => <ChefsCard key={chef.id} chef={chef} />)
                                }
                            </div>
                    }
                </div>
            </section>

            {/* Recipes section area */}
            <section className='py-12 bg-red-50'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <h2 className='mb-7 text-3xl font-bold text-center'>Our Recipes</h2>
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-32 h-32 object-cover block' src='https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1647632824420-2U3SJU6ZYW3L8DJQE9GW/Pohela+Boishakh+2021+-+The+Spice+Odyssey+%2850%29.jpg?format=2500w' alt="" />
                            <h2 className='text-xl font-semibold mt-5 text-center'>Shorshe Ilish</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-32 h-32 object-cover block' src='https://www.deccanherald.com/sites/dh/files/articleimages/2022/02/19/download-8-1083076-1645264567.png' alt="" />
                            <h2 className='text-xl font-semibold mt-5 text-center'>Pitha</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-32 h-32 object-cover block' src='https://www.easycookingwithmolly.com/wp-content/uploads/2015/09/Chingri-Malai-Curry-1-480x480.jpg' alt="" />
                            <h2 className='text-xl font-semibold mt-5 text-center'>Chingri Malai Curry</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-32 h-32 object-cover block' src='https://rumkisgoldenspoon.com/wp-content/uploads/2021/05/Bhuna-khichuri-recipe.jpg' alt="" />
                            <h2 className='text-xl font-semibold mt-5 text-center'>Bhuna Khichuri</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-32 h-32 object-cover block' src='https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/chanda-shally2018030100142324_thumb.jpeg' alt="" />
                            <h2 className='text-xl font-semibold mt-5 text-center'>Chitol Maacher Muitha</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-32 h-32 object-cover block' src='https://www.deshcatering.com/wp-content/uploads/2020/06/morog-polao-jali-kabab.jpg' alt="" />
                            <h2 className='text-xl font-semibold mt-5 text-center'>Morog Polao</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact section area */}
            <section className='py-12'>
                <div className='px-3 xl:px-0 xl:container mx-auto grid md:grid-cols-2 items-center'>
                    <div>
                        <img className='w-full -scale-x-100' src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" />
                    </div>
                    <div>
                        <div className='mb-3'>
                            <label htmlFor="name" className='block font-medium mb-1'>Your Name</label>
                            <input type="text" name="name" id="name" className='block w-full bg-teal-100 px-3 py-2 rounded-md' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="contact_email" className='block font-medium mb-1'>Your Email Address</label>
                            <input type="email" name="contact_email" id="contact_email" className='block w-full bg-teal-100 px-3 py-2 rounded-md' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="contact_subject" className='block font-medium mb-1'>Subject</label>
                            <input type="text" name="contact_subject" id="contact_subject" className='block w-full bg-teal-100 px-3 py-2 rounded-md' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="contact_message" className='block font-medium mb-1'>Message</label>
                            <textarea name="contact_message" id="contact_message" cols="1" rows="5" className='block w-full bg-teal-100 px-3 py-2 rounded-md'></textarea>
                        </div>
                        <button className='block w-full py-3 bg-[#ffa200] mt-3 text-white font-semibold uppercase'>Send</button>
                    </div>
                </div>
            </section>

            {/* Subscribe section area */}
            <section className='py-12 bg-[#ffa200]'>
                <div className='px-3 xl:px-0 xl:container mx-auto grid md:grid-cols-2 gap-5 md:gap-0'>
                    <div className='basis'>
                        <h2 className='uppercase font-extrabold text-2xl'>Let's stay in touch</h2>
                        <p className='text-sm'>Sign up today to receive the latest offers and information!</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                        <input className='basis-5/6 bg-[#ffce78] rounded-full py-2 px-4' type="email" name="email" id="email" />
                        <button className='basis-1/6 py-2 px-4 bg-black rounded-full text-white font-bold' type="submit">Subscribe</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;