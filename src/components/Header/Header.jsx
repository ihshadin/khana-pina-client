import React, { useContext, useState } from 'react';
import logo from '../../../public/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { TfiAlignRight, TfiAngleDoubleRight } from "react-icons/tfi";
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <header className='flex items-center justify-between py-5 px-3 xl:px-0 xl:container mx-auto relative'>
            <div>
                {/* <img className='w-36' src={logo} alt="" /> */}
                <Link to='/' className='font-bold text-2xl text-[#2a2a2e]'>Khana<span className='text-[#ffa200]'>Pina</span></Link>
            </div>
            <div>
                <div className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <TfiAngleDoubleRight /> : <TfiAlignRight />
                    }
                </div>
                <div className={`bg-slate-400 md:bg-white md:right-0 absolute md:static min-w-[180px] p-5 md:p-0 md:w-auto flex items-center flex-col md:flex-row gap-2 md:gap-4 font-medium text-[#2a2a2e] duration-300
                    ${menuOpen ? 'right-3' : '-right-52'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Blog</NavLink>
                    {/* <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Login</NavLink> */}
                    {
                        user ? <img className='w-8 h-8 object-cover rounded-full cursor-pointer' title={user.displayName} src={user.photoURL || 'https://media.licdn.com/dms/image/C5603AQEyNKnirxXA5w/profile-displayphoto-shrink_800_800/0/1632428106559?e=2147483647&v=beta&t=C2zGNkOkQTs6_ZkL3Sq22-KELUUGw9N9FlLSObMPfos'} alt="" />
                            : <>
                                <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Login</NavLink>
                                <NavLink to='/register' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Register</NavLink>
                            </>
                    }
                    {
                        user && <button onClick={handleLogOut}>Logout</button>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;