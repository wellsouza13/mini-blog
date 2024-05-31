import React, { createContext, ReactNode, useContext } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';

interface AuthContextType {
    auth: ReturnType<typeof useAuthentication>['auth'];
    createUser: ReturnType<typeof useAuthentication>['createUser'];
    error: ReturnType<typeof useAuthentication>['error'];
    logout: ReturnType<typeof useAuthentication>['logout'];
    login: ReturnType<typeof useAuthentication>['login'];
    loading: ReturnType<typeof useAuthentication>['loading'];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const auth = useAuthentication();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
