import styles from "./pages.module.css";
import Button from "../components/Button";
import buttonStyles from "../components/Button.module.css";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoggedIn, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, loading, navigate]);
  
  return (
    <main className={styles.dashboard}>
      <h1>This is the dashboard</h1>
      <p>Here you can see all the events you have joined</p>
      <p>Here you can also create a new event</p>
      <Button
        text="Create Event"
        className={buttonStyles.dashboardCreateEventButton}
        onClick={() => navigate("/create-event")}
      />
    </main>
  );
}