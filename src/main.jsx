import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import MainLayouts from './components/layouts/MainLayouts'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage'
import AuthProvider from './components/providers/AuthProvider'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Login/register'
import ChefRecipes from './components/Pages/ChefRecipes/ChefRecipes'
import '@smastrom/react-rating/style.css'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'chef-recipes/:id',
        element: <ChefRecipes />,
        loader: ({ params }) => fetch(`https://khana-pina-server-ihshadin.vercel.app/chef/${params.id}`)
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </AuthProvider>
  </React.StrictMode>,
)
