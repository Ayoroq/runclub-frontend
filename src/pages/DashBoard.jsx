import styles from "./pages.module.css";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Post from "../components/PostCard";
import DashLeft from "../components/DashLeft";
import Subscribe from "../components/Subscribe";

export default function Dashboard() {
  const navigate = useNavigate();
  const { loading } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

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
      {isLoggedIn && <div className={styles.dashRight}>
        <Subscribe />
        <div
          className={styles.phonePostButtonContainer}
          onClick={() => navigate("/compose/post")}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={styles.phonePostButton}
          >
            <g>
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </g>
          </svg>
        </div>
      </div>}
    </main>
  );
}