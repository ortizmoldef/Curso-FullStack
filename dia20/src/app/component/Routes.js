'use client';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./Home"; 
import NewTask from "./NewTask"; 
import Navbar from "./NavBar"; 
import { TaskProvider } from "./TaskContext"; 
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
          element: <Home />,
        },
        {
          path: "/new-task",
          element: <NewTask />,
        },
      ],
    },
  ]);

  return (
    <TaskProvider> 
      <RouterProvider router={router} />
    </TaskProvider>
  );
}

export default App;
