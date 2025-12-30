import styles from "./pages.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Post() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  function handleCancel() {
    navigate(-1);
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
        <button style={text.length > 0 ? {opacity: 1} : undefined} className={styles.postButton}>Post</button>
      </div>
    </section>
  );
}