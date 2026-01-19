import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMember, setIsMember] = useState(false);

  async function checkAuth() {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setIsLoggedIn(false);
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/verify`,
        {
          headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
           },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setIsLoggedIn(true);
        setIsMember(data.user.ismember);
        setIsAdmin(data.user.isadmin);
      } else {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setUser(null);
        setIsMember(false);
        setIsAdmin(false);
      }
    } catch (err) {
      localStorage.removeItem("authToken");
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
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const token = data.token;
        localStorage.setItem("authToken", token);
        setUser(data.user);
        setIsLoggedIn(true);
        setIsAdmin(data.user.isadmin);
        setIsMember(data.user.ismember);
        return { success: true };
      }
      return { success: false, error: "Invalid credentials" };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async function signupUser(userData) {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
      if (res.ok) {
        const data = await res.json();
        return { success: true };
      }
      return { success: false, error: "Signup failed" };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async function updateUser(userData) {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return { success: false, error: "No auth token found" };
    }
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
           },
          body: JSON.stringify(userData),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setIsLoggedIn(true);
        setIsMember(data.user.ismember);
        setIsAdmin(data.user.isadmin);
        return { success: true };
      }
      return { success: false, error: "Update failed" };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async function logout() {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
    setIsAdmin(false);
    setIsMember(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isMember,
        isAdmin,
        loading,
        user,
        loginUser,
        signupUser,
        updateUser,
        logout,
        checkAuth,
        setUser,
        setIsMember,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
