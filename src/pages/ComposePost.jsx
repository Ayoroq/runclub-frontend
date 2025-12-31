import styles from "./pages.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Post() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  function handleCancel() {
    navigate(-1);
  }
  async function handlePost() {
  if (text.trim().length === 0) return;

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
      body: JSON.stringify({ content: text }),
    });

    if (res.ok) {
      navigate(-1);
    } else if (res.status === 401) {
      navigate("/login");
    } else if (res.status === 403) {
      navigate("/403");
    } else {
      console.error("Unexpected error:", res.status);
    }
  } catch (error) {
    console.error(error);
  }
}
  return (
    <section className={styles.postSection}>
      <div onClick={handleCancel}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={styles.postCancel}
        >
          <g>
            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
          </g>
        </svg>
      </div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        autoFocus
        rows={10}
        autoCorrect="on"
        maxLength={280}
        className={styles.postText}
        name="textarea"
        id="post"
        placeholder="What's happening?"
        value={text}
      ></textarea>
      <div className={styles.postButtonDiv}>
        <button
          style={text.length > 0 ? { opacity: 1 } : undefined}
          className={styles.postButton}
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </section>
  );
}
