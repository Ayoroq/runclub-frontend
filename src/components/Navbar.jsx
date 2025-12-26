import styles from '../pages/pages.module.css'
import { useNavigate } from 'react-router'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


export default function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <h1>Run Club</h1>
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
                {isLoggedIn ? (
                    <>
                        <li onClick={() => navigate('/dashboard')}>Dashboard</li>
                        <li onClick={logout}>Logout</li>
                    </>
                ) : (
                    <>
                        <li onClick={() => navigate('/login')}>Login</li>
                        <li onClick={() => navigate('/signup')}>Signup</li>
                    </>
                )}
            </ul>
        </nav>
    )
}