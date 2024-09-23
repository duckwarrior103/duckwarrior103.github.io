import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/home.jsx';
import About from './routes/about.jsx'
import Timeline from './routes/timeline.jsx';
import Projects from './routes/projects.jsx';
import ErrorPage from "./error-page";
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/timeline",
        element: <Timeline/>,
      },
      {
        path: "/projects",
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
