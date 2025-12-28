import styles from "./Components.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PostCard({ posts }) {
  const { isLoggedIn, loading } = useContext(AuthContext);

  function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours < 1) return `${minutes} mins ago`;
  if (hours < 24) return `${hours} hrs ago`;

  // Show date like "Dec 25"
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

  return (
    <ul className={styles.postContainer}>
      {posts.map((post) => (
        <li key={post.postid} className={styles.post}>
          <p className={styles.postContent}>{post.content}</p>
          <div className={styles.postInfo}>
            <p>@{post.username} . <span>{timeAgo(post.created_at)}</span></p>
          </div>
        </li>
      ))}
    </ul>
  );
}
