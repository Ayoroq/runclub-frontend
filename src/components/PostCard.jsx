import styles from "./Components.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PostCard({ posts }) {
  const { isLoggedIn, loading } = useContext(AuthContext);

  function timeAgo(date) {
    const now = new Date();
    const diffInMilliseconds = date.getTime() - now.getTime();
    const diffInSeconds = Math.round(diffInMilliseconds / 1000);
    const diffInMinutes = Math.round(diffInSeconds / 60);
    const diffInHours = Math.round(diffInMinutes / 60);
    const diffInDays = Math.round(diffInHours / 24);
    const diffInMonths = Math.round(diffInDays / 30.44);
    const diffInYears = Math.round(diffInDays / 365.25);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (Math.abs(diffInYears) > 0) {
      return rtf.format(diffInYears, "year");
    } else if (Math.abs(diffInMonths) > 0) {
      return rtf.format(diffInMonths, "month");
    } else if (Math.abs(diffInDays) > 0) {
      return rtf.format(diffInDays, "day");
    } else if (Math.abs(diffInHours) > 0) {
      return rtf.format(diffInHours, "hour");
    } else if (Math.abs(diffInMinutes) > 0) {
      return rtf.format(diffInMinutes, "minute");
    } else {
      return rtf.format(diffInSeconds, "second");
    }
  }

  return (
    <ul className={styles.postContainer}>
      {posts.map((post) => (
        <li key={post.postid} className={styles.post}>
          <p className={styles.postContent}>{post.content}</p>
          <div className={styles.postInfo}>
            <p>@{post.username} . <span>{timeAgo(new Date(post.created_at))}</span></p>
          </div>
        </li>
      ))}
    </ul>
  );
}
