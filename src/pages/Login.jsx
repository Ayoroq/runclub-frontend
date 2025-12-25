import styles from './pages.module.css'
import Button from '../components/Button'
import buttonStyles from '../components/Button.module.css'

export default function Login() {

  function  handleLoginSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData);
    console.log(data)
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