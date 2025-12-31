import styles from "../pages/pages.module.css";
export default function Subscribe() {
  return (
    <>
      <div className={styles.subscribe}>
        <h2>Subscribe to Membership</h2>
        <p>Join our community of runners and meet fellow minded people</p>
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
      <div className={styles.admin}>
        <h2>Want to be an Admin</h2>
        <p>
          Help shape our community, organize events, and support fellow runners
          by joining our admin team.
        </p>
        <button className={styles.adminButton}>Subscribe</button>
      </div>
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
        <h3>Events</h3>
        <p>See what is happening</p>
      </div>
      <div className={styles.trendingItem}>
        <h3>Groups</h3>
        <p>See what groups are running</p>
      </div>
    </div>
  );
}
