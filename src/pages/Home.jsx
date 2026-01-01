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
      <section className={styles.contentSection}>
        <div className={styles.textContent}>
          <h2>Join Our Active Community</h2>
          <p>
            Welcome to Runners & Cyclers where fitness meets friendship! Our club brings together passionate runners and cyclists of all levels, from beginners taking their first steps to seasoned athletes chasing personal records.
          </p>
          <p>
            Whether you prefer the rhythmic pace of running through scenic trails or the exhilarating speed of cycling on open roads, you'll find your tribe here. We organize regular group runs, cycling tours, training sessions, and social events that build lasting connections.
          </p>
          <p>
            Ready to lace up your shoes or hop on your bike? Join us and discover the joy of staying active with like-minded people who share your passion for movement and adventure.
          </p>
        </div>
      </section>
    </main>
  );
}
