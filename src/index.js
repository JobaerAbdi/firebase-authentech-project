import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import UserContext from './context/UserContext'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserContext>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer position='top-center' />
  </UserContext>
)
