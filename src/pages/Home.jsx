import { useNavigate } from "react-router";
import styles from "./pages.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, loading, navigate]);

  if (loading) {
    return null;
  }

  return (
    <main className={styles.home}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/run.jpg"
          alt="Image of people running"
        />
      </div>
      <header>
        <h1 className={styles.title}><span>Mornin'</span><span>Runners</span><span>Club</span></h1>
      </header>
    </main>
  );
}
