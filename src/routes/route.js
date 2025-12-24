import { Children } from "react";

const routes = [
    {
        path:'/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]