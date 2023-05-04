import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("user from private router", location);
    if (loading) {
        return <div className="radial-progress bg-primary text-primary-content border-4 border-primary absolute start-1/2 -translate-x-1/2" style={{ "--value": 70 }}>70%</div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoutes;