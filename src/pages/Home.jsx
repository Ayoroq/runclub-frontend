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

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <main className={styles.home}>
      <header>
        <h1 className={styles.title}>
          Runners & Cyclers
          <br />
          <span className={styles.subtitle}>The Community</span>
        </h1>
      </header>
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/run.jpg"
            alt="Image of people running"
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/cycle_home.jpg"
            alt="Image of people cycling"
          />
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}
