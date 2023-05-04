import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import LoginWithSocial from './LoginWithSocial';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('')

        const form = event.target;
        const name = form.signup_name.value;
        const photolink = form.signup_photo.value;
        const email = form.signup_email.value;
        const password = form.signup_password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please input at least one uppper latter');
            return;
        } else if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(createdUser, name, photolink)
                setSuccess('Congrates! You are successfully register!')
            })
            .catch(error => {
                console.log(error?.message)
            })
    }

    const updateUserData = (user, name, pLink) => {
        updateProfile(user, {
            displayName: name,
            photoURL: pLink,
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div>
            <form onSubmit={handleRegister} className='my-12 mx-auto py-12 px-8 w-11/12 md:max-w-lg rounded-lg shadow-xl hover:shadow-inner'>
                <h4 className='text-xl md:text-2xl font-semibold text-center mb-5'>Please Register an Account</h4>
                <div className='mb-3'>
                    <label htmlFor="signup_name" className='block font-medium mb-1'>Name</label>
                    <input type="text" name="signup_name" id="signup_name" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input you name' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="signup_photourl" className='block font-medium mb-1'>Photo URL</label>
                    <input type="text" name="signup_photo" id="signup_photo" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input your photo URL' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="signup_email" className='block font-medium mb-1'>Email Address</label>
                    <input type="email" name="signup_email" id="signup_email" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input your email address' required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="signup_password" className='block font-medium mb-1'>Password</label>
                    <input type="password" name="signup_password" id="signup_password" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input your password' required />
                </div>
                <small className='block text-teal-400'>{success}</small>
                <small className='block text-red-500'>{error}</small>
                <button className='error_message block px-12 py-2 mx-auto bg-[#ffa200] mt-5 text-white font-semibold uppercase'>Register</button>
                <small className='block mt-4 font-semibold text-center text-[#2a2a2e]'>Already have an Account ? <Link to='/login' className='text-[#ffa200]'>Login</Link></small>
                <div className="flex flex-col w-full">
                    <div className="divider"> OR </div>
                </div>
                <LoginWithSocial />
            </form>
        </div>
    );
};

export default Register;