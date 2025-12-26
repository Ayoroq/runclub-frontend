import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    async function checkAuth() {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/check`, {
                credentials: 'include'
            });
            setIsLoggedIn(res.ok);
        } catch {
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    async function loginUser(credentials) {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(credentials)
            });
            if (res.ok) {
                setIsLoggedIn(true);
                return { success: true };
            }
            return { success: false, error: 'Invalid credentials' };
        } catch (error) {
            return { success: false, error: 'Login failed' };
        }
    }

    async function signupUser(userData) {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(userData)
            });
            if (res.ok) {
                setIsLoggedIn(true);
                return { success: true };
            }
            return { success: false, error: 'Signup failed' };
        } catch (error) {
            return { success: false, error: 'Signup failed' };
        }
    }

    async function logout() {
        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include'
            });
        } catch (error) {
            console.error('Logout error:', error);
        }
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, loading, loginUser, signupUser, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}