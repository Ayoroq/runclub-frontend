import styles from "./Components.module.css";
export default function PostCard({posts}){
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