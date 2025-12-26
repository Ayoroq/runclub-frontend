import styles from '../pages/pages.module.css'
import { useNavigate } from 'react-router'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


export default function Navbar() {
    const { isLoggedIn,loading, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <h1 className={styles.logo} onClick={() => navigate('/')}>Run Club</h1>
            </div>
            <div className={styles.navbarRight}>
                {loading ? null : isLoggedIn ? (
                    <>
                        <span className={styles.username}>{user.username}</span>
                        <button className={styles.logoutButton} onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className={styles.loginButton} onClick={() => navigate('/login')}>Login</button>
                        <button className={styles.signupButton} onClick={() => navigate('/signup')}>Signup</button>
                    </>
                )}
            </div>
        </nav>
    )
}