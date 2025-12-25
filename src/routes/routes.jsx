import App from '../App.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import HomePage from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import NotAuthorized from '../pages/NotAuthorized.jsx'

const routes = [
    {
        path:'/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/403',
                element: <NotAuthorized />
            }
        ]
    }
]

export default routes