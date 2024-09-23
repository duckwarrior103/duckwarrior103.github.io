import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/home.jsx';
import About from './routes/about.jsx'
import Timeline from './routes/timeline.jsx';
import Projects from './routes/projects.jsx';
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Navbar from './components/navbar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "timeline",
        element: <Timeline/>,
      },
      {
        path: "projects",
        element: <Projects/>,
      },
    ],
  },
  {
    path: "about"
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
