import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useState } from 'react'
import './style.scss'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from "./pages/Home";
import AddArtikel from "./pages/AddArtikel";
import ArtikelDetail from "./pages/ArtikelDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Artikel from "./pages/Artikel";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/add",
        element: <AddArtikel />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/articles",
        element: <Artikel />
      },
      {
        path:"/article/:id",
        element: <ArtikelDetail />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])
function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
