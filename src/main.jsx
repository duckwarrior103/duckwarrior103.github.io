import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './routes/root.jsx';
import About from './routes/about.jsx'
import Timeline from './routes/timeline.jsx';
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
