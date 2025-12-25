export default function Signup() {
    function handleFormSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return (
        <main>
            <h1>Signup Page</h1>
            <p>This is the signup page</p>
            <form action="" onSubmit={handleFormSubmit}>
                <p>
                    <label htmlFor="firstName"></label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" required />
                </p>
                <p>
                    <label htmlFor="lastName"></label>
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" required />
                </p>
                <p>
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </p>
                <p>
                    <label htmlFor="username"></label>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                </p>
                <p>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Password" required />
                </p>
                <p>
                    <label htmlFor="confirmPassword"></label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
                </p>
                <p>
                    <button type="submit">Signup</button>
                </p>
            </form>
        </main>
    )
}