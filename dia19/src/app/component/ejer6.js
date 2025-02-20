'use client';

import { createBrowserRouter, RouterProvider, Outlet, useParams, useLoaderData, useRouteError } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import { useEffect, useState } from "react";
import NavbarNo from "./NavBarNo";

function Layout() {
    return (
        <div>
            <NavbarNo />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

function NoticiaProfile() {
    const { id } = useParams();
    return <h1>Detalles de la noticia:{id} </h1>
}

function NewNoticia() {
    const newNo = useLoaderData();
    return <h1>{newNo.title}</h1>
}

function ErrorPage() {
    const error = useRouteError(); 

    return (
        <div>
            <h1>Error: {error.statusText || error.message}</h1>
        </div>
    );
}

function Noticia() {

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
                    path: "/news",
                    element: <News />
                },
                {
                    path: "new/:id",
                    element: <NewNoticia />,
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

export default Noticia;
