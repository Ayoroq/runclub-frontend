import styles from "./pages.module.css";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Post from "../components/PostCard";
import DashLeft from "../components/DashLeft";

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
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
          console.error("Server returned an error:", res.status);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    getPosts();
  }, []);

  if (loading) return null;

  return (
    <main className={styles.dashboard}>
      <DashLeft />
      <Post posts={posts} />
      <div className={styles.dashRight}>
        <div className={styles.subscribe}>
          <h2>Subscribe to Membership</h2>
          <p>Join our community of runners and meet fellow minded people</p>
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
        <div className={styles.admin}>
          <h2>Want to be an Admin</h2>
          <p>
            Help shape our community, organize events, and support fellow
            runners by joining our admin team.
          </p>
          <button className={styles.adminButton}>Subscribe</button>
        </div>
      </div>
    </main>
  );
}
