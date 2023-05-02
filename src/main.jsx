import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import { ToastContainer } from 'react-toastify';

import './index.css'
import router from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </AuthProvider>
    
  </React.StrictMode>,
)
