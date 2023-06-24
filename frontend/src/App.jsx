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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
