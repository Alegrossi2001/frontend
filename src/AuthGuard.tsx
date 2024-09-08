
import React from 'react';
import { Navigate } from 'react-router-dom';
interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {

    const isAuthenticated = true;


    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return <>{children}</>;
};

export default AuthGuard;