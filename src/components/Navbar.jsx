import styles from '../pages/pages.module.css'
import { useNavigate } from 'react-router'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


export default function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
        </nav>
    )
}