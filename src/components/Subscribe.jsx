import styles from "../pages/pages.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Subscribed } from "./Button";
import { useSubscribeToMembership, useSubscribeToAdmin } from "../utils/SubscribeFunctions";

export default function Subscribe() {
  const { user } = useContext(AuthContext);
  const subscribeMembership = useSubscribeToMembership();
  const subscribeAdmin = useSubscribeToAdmin();
  return (
    <>
      {!user.ismember && (
        <div className={styles.subscribe}>
          <h2>Subscribe to Membership</h2>
          <p>Join our community of runners and meet fellow minded people</p>
          {user.ismember ? (
            <Subscribed />
          ) : (
            <button className={styles.subscribeButton} onClick={subscribeMembership}>Subscribe</button>
          )}
        </div>
      )}

      {!user.isadmin && (
        <div className={styles.admin}>
          <h2>Want to be an Admin</h2>
          <p>
            Help shape our community, organize events, and support fellow
            runners by joining our admin team.
          </p>
          {user.isadmin ? (
            <Subscribed />
          ) : (
            <button className={styles.adminButton} onClick={subscribeAdmin} >Subscribe</button>
          )}
        </div>
      )}
    </>
  );
}

export function Trending() {
  return (
    <div className={styles.trending}>
      <div className={styles.trendingItem}>
        <h3>Runners</h3>
        <p>See who is running</p>
      </div>
      <div className={styles.trendingItem}>
        <h3>Cyclers</h3>
        <p>See who is cycling</p>
      </div>
      <div className={styles.trendingItem}>
        <h3>Events</h3>
        <p>See what is happening</p>
      </div>
      <div className={styles.trendingItem}>
        <h3>Groups</h3>
        <p>See what groups are running/cycling</p>
      </div>
    </div>
  );
}

