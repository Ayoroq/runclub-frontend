import styles from "./pages.module.css";
import Button from "../components/Button";
import buttonStyles from "../components/Button.module.css";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Post from "../components/PostCard";

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoggedIn, loading } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, loading, navigate]);

useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
          method: 'GET',
          credentials: 'include'
        });

        if (res.ok) {
          const data = await res.json();
          setPosts(data)
        } else {
          console.error('Server returned an error:', res.status);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    getPosts();
  }, []);

  if(loading) return (null)
  
  return (
    <main className={styles.dashboard}>
      <Post posts={posts}/>
    </main>
  );
}