import styles from "./Components.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Navbar() {
  const { isLoggedIn, loading, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    if (isLoggedIn) {
      logout();
    }
    navigate("/login");
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft} onClick={() => navigate("/")}>
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
      <div className={styles.navbarRight}>
        {loading ? null : isLoggedIn ? (
          <>
            <div className={styles.userInfo}>
              <span className={styles.username}>{user.username}</span>
              {user.isadmin && <span className={styles.admin}>Admin</span>}
            </div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              <g id="Material Symbols Icon 2">
                <path
                  id="Vector"
                  d="M9 42C8.2 42 7.5 41.7 6.9 41.1C6.3 40.5 6 39.8 6 39V9C6 8.2 6.3 7.5 6.9 6.9C7.5 6.3 8.2 6 9 6H23.95V9H9V39H23.95V42H9ZM33.3 32.75L31.15 30.6L36.25 25.5H18V22.5H36.15L31.05 17.4L33.2 15.25L42 24.05L33.3 32.75Z"
                  fill="black"
                />
              </g>
            </svg>
          </>
        ) : (
          <>
            <button
              className={styles.loginButton}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={styles.signupButton}
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
