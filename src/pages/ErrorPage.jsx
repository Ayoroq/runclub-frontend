import { useNavigate } from "react-router"
export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}