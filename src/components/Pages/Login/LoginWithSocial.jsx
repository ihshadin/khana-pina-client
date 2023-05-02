import React, { useContext } from 'react';
import googleLogin from '../../../assets/images/google-btn.png';
import githubLogin from '../../../assets/images/github-btn.png';
import { AuthContext } from '../../providers/AuthProvider';

const LoginWithSocial = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error?.message);
            })
    }

    return (
        <div className='flex gap-2 w-52 flex-col mx-auto'>
            <img onClick={handleSignInWithGoogle} className='cursor-pointer' src={googleLogin} alt="" />
            <img className='cursor-pointer' src={githubLogin} alt="" />
        </div>
    );
};

export default LoginWithSocial;