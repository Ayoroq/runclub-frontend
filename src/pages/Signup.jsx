import styles from './pages.module.css'

export default function Signup() {
    function handleFormSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return (
        <main className={styles.main}>
            <h1>Signup Page</h1>
            <p>This is the signup page</p>
            <form action="" onSubmit={handleFormSubmit} className={styles.form}>
                <p>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" required />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </p>
                <p>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required minLength={8} />
                </p>
                <p>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" required minLength={8} />
                </p>
                <p>
                    <button className={styles.button} type="submit">Signup</button>
                </p>
            </form>
        </main>
    )
}