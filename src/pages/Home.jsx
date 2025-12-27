import { useNavigate } from "react-router";
import styles from "./pages.module.css";
import buttonStyles from "../components/Button.module.css";
import Button from "../components/Button";
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
    return(null);
  }

  return (
    <main className={styles.home}>
      <h1>This is the homepage</h1>
      <p>Join a community of runners and meet fellow minded people</p>
      <p>Sign up to get started</p>
      <Button
        text="Signup"
        className={buttonStyles.homeSignupButton}
        onClick={() => navigate("/signup")}
      />
      <p>
        Already have an account?{" "}
        <span className={styles.loginLink} onClick={() => navigate("/login")}>
          Log in
        </span>
      </p>
    </main>
  );
}
