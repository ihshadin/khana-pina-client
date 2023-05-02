import React from 'react';
import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-slate-950 pt-10'>
            <div className='px-3 xl:px-0 xl:container mx-auto md:flex justify-between'>
                <div>
                    <h1 className='font-bold text-2xl text-white'>Khana<span className='text-[#ffa200]'>Pina</span></h1>
                    <p className='text-gray-300 mt-2'>
                        467 Park Avenue New York, Ny 10<br />
                        Office@Domain.Com<br />
                        01-800-81200
                    </p>
                </div>
                <div className='font-medium mt-4 md:mt-0'>
                    <h3 className='font-bold text-2xl text-white text-left'>Menu Links</h3>
                    <Link to='/' className='text-white hover:text-[#ffa200] block'>Home</Link>
                    <Link to='/blog' className='text-white hover:text-[#ffa200] block'>Blog</Link>
                    <Link to='/login' className='text-white hover:text-[#ffa200] block'>Login</Link>
                </div>
                <div className='mt-4 md:mt-0 text-white'>
                    <h3 className='font-bold text-2xl text-white text-left'>Follow Here</h3>
                    <div className='flex gap-3 mt-4'>
                        <TfiFacebook />
                        <TfiLinkedin />
                        <TfiTwitterAlt />
                    </div>
                </div>
            </div>
            <div className='pb-8 pt-4 px-3 xl:px-0 xl:container mx-auto'>
                <p className='text-sm text-gray-400 text-center' > Copyright © 2023 <Link to='/' className='hover:text-[#ffa200]'>KhanaPina</Link></p>
            </div>
        </footer>
    );
};

export default Footer;