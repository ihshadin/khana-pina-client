import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import errorImage from '../../../assets/images/404pageImg.avif'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-full md:max-w-lg mx-auto' src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;