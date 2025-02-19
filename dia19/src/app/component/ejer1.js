'use client';

import { createBrowserRouter, RouterProvider, Outlet, useParams, useLoaderData, useRouteError } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

function UserProfile() {
    const { id } = useParams();
    return <h1>Perfil de usuario: {id} </h1>
}

function Post() {
    const post = useLoaderData();
    return <h1>{post.title}</h1>
}

function ErrorPage() {
    const error = useRouteError(); 

    return (
        <div>
            <h1>Error: {error.statusText || error.message}</h1>
        </div>
    );
}

function App() {

    const [isClient, setIsClient] = useState(false);
    
    useEffect(() =>{
        setIsClient(true);
    })

    if(!isClient){
        return null;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/user/:id", 
                    element: <UserProfile />
                },
                {
                    path: "post/:id",
                    element: <Post />,
                    loader: async ({ params }) => {
                        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                        if (!res.ok) {
                            throw new Error(`Illo que te has perdido`);
                        }
                        return res.json();
                    },
                    errorElement: <ErrorPage /> 
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
