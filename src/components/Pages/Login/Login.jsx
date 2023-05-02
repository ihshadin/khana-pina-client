import React, { useContext, useState } from 'react';
import googleLogin from '../../../assets/images/google-btn.png';
import githubLogin from '../../../assets/images/github-btn.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import LoginWithSocial from './LoginWithSocial';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/category/0';

    const handleLogin = event => {
        event.preventDefault();
        setSuccess('');
        setError('')

        const form = event.target;
        const email = form.login_email.value;
        const password = form.login_password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('You are successfully loggedin');
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError('Please check your Email or password')
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='my-12 mx-auto py-12 px-8 w-11/12 md:max-w-lg rounded-lg shadow-xl hover:shadow-inner'>
                <h4 className='text-xl md:text-2xl font-semibold text-center mb-5'>Please Sign in your Account</h4>
                <div className='mb-3'>
                    <label htmlFor="login_email" className='block font-medium mb-1'>Email Address</label>
                    <input type="email" name="login_email" id="login_email" className='block w-full bg-teal-100 px-3 py-2 rounded-md' required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="login_password" className='block font-medium mb-1'>Password</label>
                    <input type="password" name="login_password" id="login_password" className='block w-full bg-teal-100 px-3 py-2 rounded-md' required />
                </div>
                <small className='block text-teal-500'>{success}</small>
                <small className='block text-red-500'>{error}</small>
                <button className='error_message block px-12 py-2 mx-auto bg-[#ffa200] mt-5 text-white font-semibold uppercase'>Login</button>
                <small className='block mt-4 font-semibold text-center text-[#2a2a2e]'>Dont’t Have An Account ? <Link to='/register' className='text-[#ffa200]'>Register</Link></small>
                <div className="flex flex-col w-full">
                    <div className="divider"> OR </div>
                </div>
                <LoginWithSocial />
            </form>
        </div>
    );
};

export default Login;