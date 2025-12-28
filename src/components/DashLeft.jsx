import styles from './Components.module.css'
export default function DashLeft(){
    return(
        <section className={styles.leftNavContainer}>
            <div>
                <p className={`${styles.active} ${styles.leftNav}`}>Home</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Explore</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Notifications</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Messages</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Profile</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Communities</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Bookmarks</p>
            </div>
            <div>
                <p className={`${styles.leftNav}`}>Settings</p>
            </div>
            <button className={styles.postButton}>Post</button>
        </section>
    )
}