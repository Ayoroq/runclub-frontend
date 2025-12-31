import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false)
    const [isMember, setIsMember] = useState(false)

    async function checkAuth() {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/verify`, {
                credentials: 'include'
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
                setIsLoggedIn(true);
                setIsMember(data.user.ismember);
                setIsAdmin(data.user.isadmin);
            } else {
                setIsLoggedIn(false);
                setUser(null);
                setIsMember(false);
                setIsAdmin(false);
            }
        } catch(err){
            setIsLoggedIn(false);
            setUser(null);
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
                const data = await res.json();
                setUser(data.user);
                setIsLoggedIn(true);
                setIsAdmin(data.user.isadmin);
                setIsMember(data.user.ismember);
                return { success: true };
            }
            return { success: false, error: 'Invalid credentials' };
        } catch (error) {
            return { success: false, error: error };
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
                const data = await res.json();
                setUser(data.user);
                setIsLoggedIn(true);
                return { success: true };
            }
            return { success: false, error: 'Signup failed' };
        } catch (error) {
            return { success: false, error: error };
        }
    }

    async function updateUser(userData) {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/update`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(userData)
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
                setIsLoggedIn(true);
                setIsMember(data.user.ismember);
                setIsAdmin(data.user.isadmin);
                return { success: true };
            }
            return { success: false, error: 'Update failed' };
        } catch (error) {
            return { success: false, error: error };
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
        setLoading(false)
        setIsLoggedIn(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, isMember,isAdmin, loading, user, loginUser, signupUser, updateUser, logout, checkAuth, setUser, setIsMember }}>
            {children}
        </AuthContext.Provider>
    );
}