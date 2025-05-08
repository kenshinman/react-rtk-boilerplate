
import { lazy } from 'react'
import { createBrowserRouter } from "react-router-dom";


// Lazy load the pages
const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/about",
    Component: About
  },
])

export default router;