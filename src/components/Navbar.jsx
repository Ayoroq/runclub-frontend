import styles from '../pages/pages.module.css'
import Button from './Button'
import buttonStyles from './Button.module.css'
import { useNavigate } from 'react-router'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


export default function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            {isLoggedIn ? (
                <Button text="Logout" onClick={logout} />
            ) : (
                <>
                    <Button text="Login" onClick={() => navigate('/login')} />
                    <Button text="Signup" onClick={() => navigate('/signup')} />
                </>
            )}
        </nav>
    )
}