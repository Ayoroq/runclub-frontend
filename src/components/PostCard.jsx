import styles from "./Components.module.css";
export default function PostCard({posts}){
    return(
       <ul className={styles.postContainer}>
        {posts.map((post) => (
            <li key={post.id}>
                <p>{post.content}</p>
                <div>
                    <p>@{post.username}</p>
                    <p>{post.created_at}</p>
                </div>
            </li>
        ))}
      </ul>
    )
}