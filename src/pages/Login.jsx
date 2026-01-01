import styles from "./pages.module.css";
import Button from "../components/Button";
import buttonStyles from "../components/Button.module.css";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser,isLoggedIn, loading} = useContext(AuthContext);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, loading, navigate]);

  if(loading){
    return null
  }

  function handleGuestLogin() {
    navigate("/dashboard");
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await loginUser(data);
    if (!response.success) {
      console.error("Login failed");
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.loginMain}>
      <div className={styles.Loginlogo}>
        <div className={styles.lotties} onClick={() => navigate("/")}>
          <DotLottieReact
            src="/logo.lottie"
            autoplay
            loop
            className={styles.lottie}
          />
          <DotLottieReact
            src="/cycle.lottie"
            autoplay
            loop
            className={styles.lottie}
          />
        </div>
        <p>Sign into Runners & Cyclers</p>
      </div>
      <form action="" onSubmit={handleLoginSubmit} className={styles.form}>
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
        <Button
          type="submit"
          className={buttonStyles.loginButton}
          text="Login"
        />
      </form>
      <div className={styles.guest}>
        <hr />
        <p>Don't want an account?</p>
        <Button
          className={buttonStyles.guestButton}
          text="Continue As Guest"
          onClick={handleGuestLogin}
        />
      </div>
    </main>
  );
}
