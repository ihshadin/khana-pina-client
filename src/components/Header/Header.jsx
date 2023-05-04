import React, { useContext, useState } from 'react';
import logo from '../../../public/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { TfiAlignRight, TfiAngleDoubleRight, TfiClose } from "react-icons/tfi";
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
            <div className='overflow-hidden'>
                {/* <div className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <TfiAngleDoubleRight /> : <TfiAlignRight />
                    }
                </div> */}
                {/* <div className={`bg-slate-400 md:bg-white md:right-0 absolute z-10 md:static min-w-[180px] p-5 md:p-0 md:w-auto flex items-center flex-col md:flex-row gap-2 md:gap-4 font-medium text-[#2a2a2e] duration-300
                    ${menuOpen ? 'right-3' : '-right-52'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Blog</NavLink>
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
                </div> */}
                <div className={`bg-white md:static min-w-[180px] hidden md:flex items-center flex-row gap-4 font-medium text-[#2a2a2e] duration-300`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Blog</NavLink>
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

                {/* Mobile Menu */}
                <div className='lg:hidden'>
                    <button
                        title='Open Menu'
                        onClick={() => setMenuOpen(true)}
                    >
                        <TfiAlignRight className='w-5 text-gray-600' />
                    </button>
                    {menuOpen && (
                        <div className='absolute top-0 w-full start-1/2 -translate-x-1/2 z-10 shadow-2xl'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo and button Section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='font-bold text-2xl text-[#2a2a2e]'>Khana<span className='text-[#ffa200]'>Pina</span></Link>
                                    </div>
                                    {/* Dropdown menu close Button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <TfiClose className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav menu items sectin */}
                                <div className={`bg-white min-w-[180px] gap-4 font-medium text-[#2a2a2e] duration-300`}>
                                    <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200] block mb-3" : "" + `hover:text-[#ffa200] block mb-3`}>Home</NavLink>
                                    <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200] block mt-3" : "" + `hover:text-[#ffa200] block mb-3`}>Blog</NavLink>
                                    {
                                        user ? <img className='w-8 h-8 object-cover rounded-full cursor-pointer mb-3' title={user.displayName} src={user.photoURL || 'https://media.licdn.com/dms/image/C5603AQEyNKnirxXA5w/profile-displayphoto-shrink_800_800/0/1632428106559?e=2147483647&v=beta&t=C2zGNkOkQTs6_ZkL3Sq22-KELUUGw9N9FlLSObMPfos'} alt="" />
                                            : <>
                                                <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200] block mb-3" : "" + `hover:text-[#ffa200] block mb-3`}>Login</NavLink>
                                                <NavLink to='/register' className={({ isActive }) => isActive ? "text-[#ffa200] block mb-3" : "" + `hover:text-[#ffa200] block mb-3`}>Register</NavLink>
                                            </>
                                    }
                                    {
                                        user && <button onClick={handleLogOut}>Logout</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;