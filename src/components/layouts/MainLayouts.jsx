import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
    return (
        <>
            <Header />
            <div className='min-h-[calc(100vh-292px)]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayouts;