import styles from "./Components.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function PostCard({ posts, setPosts}) {
  const { isLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleDeletePost(event, postid) {
    event.preventDefault();
    event.stopPropagation();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/posts/${postid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (response.status === 204) {
        const newPost = posts.filter((post) => post.postid !== postid);
        setPosts(newPost);
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
  }

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours < 1) return `${minutes} mins`;
    if (hours < 24) return `${hours} hrs`;

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
          <div className={styles.postInfo}>
            {isLoggedIn && (user.isadmin || user.ismember) ? (
              <p>
                @{post.username} . <span>{timeAgo(post.created_at)}</span>
              </p>
            ) : null}
          </div>
          <p className={styles.postContent}>{post.content}</p>
          {user?.isadmin && (
            <div className={styles.deleteButtonContainer}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.deleteButton}
                onClick={(event) => handleDeletePost(event, post.postid)}
              >
                <path
                  d="M13.05 42C12.225 42 11.5188 41.7062 10.9315 41.1185C10.3438 40.5312 10.05 39.825 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39C37.95 39.8 37.65 40.5 37.05 41.1C36.45 41.7 35.75 42 34.95 42H13.05ZM34.95 10.5H13.05V39H34.95V10.5ZM18.35 34.7H21.35V14.75H18.35V34.7ZM26.65 34.7H29.65V14.75H26.65V34.7Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
