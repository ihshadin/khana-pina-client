import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // chefs
    const [chefs, setChefs] = useState([]);

    // Create User
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login user with email&password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        fetch('https://khana-pina-server-ihshadin.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                console.log('object', data);
                setChefs(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const authInfo = {
        user,
        loading,
        chefs,
        setUser,
        setChefs,
        setLoading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;