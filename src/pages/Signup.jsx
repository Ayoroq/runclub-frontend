import styles from "./pages.module.css";
import Button from "../components/Button.jsx";
import buttonStyles from "../components/Button.module.css";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Signup() {
  const navigate = useNavigate();
  const { signupUser, isLoggedIn, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, loading, navigate]);

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await signupUser(data);
    if (!response.success) {
      console.error("Signup failed");
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.signupMain}>
      <div className={styles.signupContainer}>
        <h1>Ready to Start Running</h1>
        <p className={styles.signupText}>
          Sign up to our run club now to join our community!
        </p>
        <form action="" onSubmit={handleFormSubmit} className={styles.form}>
          <p>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" required />
          </p>
          <p>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" required />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              minLength={8}
            />
          </p>
          <p>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              minLength={8}
            />
          </p>
          <Button
            type="submit"
            className={buttonStyles.signupButton}
            text="Signup"
          />
        </form>
        <div className={styles.guest}>
          <hr />
          <p>Don't want an account?</p>
          <Button
            className={buttonStyles.guestButton}
            text="Continue As Guest"
            onClick={""}
          />
        </div>
        <p>
          Already have an account?{" "}
          <span className={styles.loginLink} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
      <div className={styles.signUpImageContainer}>
        <img
          className={styles.signUpImage}
          src="/new_run.jpg"
          alt="A man running"
        />
      </div>
    </main>
  );
}
