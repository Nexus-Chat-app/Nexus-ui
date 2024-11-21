import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import ForgotPassword from '@/pages/Auth/ForgotPassword'
import Login from '@/pages/Auth/Login'
import Register from '@/pages/Auth/Register'

const routes: RouteObject[] = [
  {path: '/login', element: <Login />},
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <Register/> },
  { 
    path: '/forgot-password',
    element: <ForgotPassword />,
  }
]

export default routes