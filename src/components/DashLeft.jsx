import styles from './Components.module.css'
export default function DashLeft(){
    return(
        <section className={styles.leftNavContainer}>
            <div className={styles.leftNavItem}>
                <p className={`${styles.active} ${styles.leftNav}`}>Home</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Explore</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Notifications</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Messages</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Profile</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Communities</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Bookmarks</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Settings</p>
            </div>
            <div className={styles.leftNavItem}>
                <p className={`${styles.leftNav}`}>Help</p>
            </div>
            <div className={styles.leftNavItem}>
                <button className={styles.postButton}>Post</button>
            </div>
        </section>
    )
}