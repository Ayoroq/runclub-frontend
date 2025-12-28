import styles from "./Components.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PostCard({posts}){
    const { isLoggedIn, loading } = useContext(AuthContext);
    return(
       <ul className={styles.postContainer}>
        {posts.map((post) => (
            <li key={post.postid} className={styles.post}>
                <p className={styles.postContent}>{post.content}</p>
                <div className={styles.postInfo}>
                    <p>@{post.username}</p>
                    <p>{post.created_at}</p>
                </div>
            </li>
        ))}
      </ul>
    )
}