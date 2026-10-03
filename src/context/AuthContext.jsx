import { createContext, useEffect, useState } from 'react'
import api, { publicApi, registerLogout } from '../api/api'

export const AuthContext = createContext()
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const checkAuth = async () => {
            try {
                const response = await api.get('api/auth/me');
                if (isMounted) {
                    setUser(response.data);
                }
            } catch (err) {
                if (isMounted) {
                    setUser(null);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }
        checkAuth();

        return () => {
            isMounted = false
        };
    }, []);

    const login = async (email, password) => {
        try {
            const response = await publicApi.post('/api/auth/login', { email, password })
            setUser(response.data);
            return response.data;

        } catch (err) {
            throw new Error(err.response?.data?.message || 'Login failed.');
        }
    };
    
    const logout = async () => {
        try {
            await api.post('/api/auth/logout');
        } catch (err) {
            console.error(err.message);
        } finally {
            setUser(null);
        }
    }

    useEffect(() => {
        registerLogout(logout);
    }, [])

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
