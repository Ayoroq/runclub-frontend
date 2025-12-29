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
    scrollTo(0, 0)
  }, [])

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
        <h1 className={styles.title}>
          <span>Mornin'</span>
          <span>Runners</span>
          <span>Club</span>
        </h1>
      </header>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          At Mornin Runners Club, we believe that running is about more than
          just the numbers on a watch. It’s about the crisp morning air, the
          sound of rhythmic breathing, and the shared energy of a group moving
          toward a common goal. Whether you are lace-up-for-the-first-time new
          or a seasoned marathoner chasing a personal best, there is a place for
          your pace here.
        </p>

        <h2>Why Run With Us?</h2>

        <p className={styles.text}>
          We know that the hardest part of any run is often just getting out the
          door. Our club is built on the foundation of accountability and
          encouragement. We take the "solo" out of the sport, turning a solitary
          grind into a social highlight.
        </p>

        <ul className={styles.list}>
          <li className={styles.listText}>
            <b>Community:</b> Beyond the pavement, we are a network of friends.
            From post-run coffees to weekend social events, the finish line is
            just the beginning.
          </li>

          <li className={styles.listText}>
            <b>Consistency:</b> No more hitting the snooze button. Knowing your
            team is waiting at the trailhead is the best motivation there is.
          </li>

          <li className={styles.listText}>
            <b>Growth:</b> We share tips, routes, and experiences. Whether
            you're looking to improve your form or find the best local trails,
            our members are your best resource.
          </li>
        </ul>

        <h2>Our Philosophy: No One Left Behind</h2>

        <p className={styles.text}>
          We pride ourselves on being an inclusive community. We offer various
          pace groups to ensure that everyone—from sprinters to casual
          strollers—feels supported. Our "no runner left behind" policy means
          exactly that; we start together, and we celebrate together.
        </p>

        <h2>Join the Movement</h2>

        <p className={styles.text}>
          Whether you’re a seasoned runner or just starting out, we invite you
          to join us. We meet every <b>Monday</b>,<b>Wednesday</b> &{" "}
          <b>Friday</b> by <b>7am</b> at the <b>Harbourfront</b>. No sign-ups
          required, no egos allowed—just bring your shoes and a positive
          attitude.
        </p>
      </div>
    </main>
  );
}
