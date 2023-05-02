import React, { useState } from 'react';
import logo from '../../../public/logo.png'
import { NavLink } from 'react-router-dom';
import { TfiAlignRight, TfiAngleDoubleRight } from "react-icons/tfi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='flex items-center justify-between py-5 px-3 xl:px-0 xl:container mx-auto relative '>
            <div>
                {/* <img className='w-36' src={logo} alt="" /> */}
                <h1 className='font-bold text-2xl text-[#2a2a2e]'>Khana<span className='text-[#ffa200]'>Pina</span></h1>
            </div>
            <div>
                <div className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <TfiAngleDoubleRight /> : <TfiAlignRight />
                    }
                </div>
                <div className={`bg-slate-400 md:bg-white md:right-0 absolute min-w-[180px] p-5 md:p-0 md:w-auto flex flex-col md:flex-row gap-2 md:gap-4 font-medium text-[#2a2a2e] duration-300 
                    ${menuOpen ? 'right-3' : '-right-52'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Blog</NavLink>
                    <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Login</NavLink>
                    <NavLink to='/register' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Register</NavLink>
                </div>
            </div>
        </header >
    );
};

export default Header;