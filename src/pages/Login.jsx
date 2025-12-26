import styles from './pages.module.css'
import Button from '../components/Button'
import buttonStyles from '../components/Button.module.css'
import { useNavigate } from 'react-router'

export default function Login() {
  const navigate = useNavigate();

  async function  handleLoginSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigate('/dashboard')
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <main className={styles.main}>
      <h1>Login</h1>
      <form action="" onSubmit={handleLoginSubmit} className={styles.form}>
        <p>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required minLength={8} />
        </p>
        <Button type="submit" className={buttonStyles.loginButton}  text="Login" color="green" />
      </form>
    </main>
  )
}