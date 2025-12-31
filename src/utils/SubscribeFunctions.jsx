import { useNavigate } from "react-router";
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
export function useSubscribeToMembership() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return async function handleSubscribeToMembership() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/togglemember`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ ismember: true }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        data.user.ismember?setUser(prev => ({ ...prev, ismember: true })) : setUser(prev => ({ ...prev, ismember: false }));
      } else if (response.status === 401) {
        navigate("/login");
      } else if (response.status === 403) {
        navigate("/403");
      } else {
        console.error("Unexpected error:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function useSubscribeToAdmin() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return async function handleSubscribeToAdmin() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/toggleadmin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ isadmin: true }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        data.user.isadmin?setUser(prev => ({ ...prev, isadmin: true })) : setUser(prev => ({ ...prev, isadmin: false }));
      } else if (response.status === 401) {
        navigate("/login");
      } else if (response.status === 403) {
        navigate("/403");
      } else {
        console.error("Unexpected error:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
}