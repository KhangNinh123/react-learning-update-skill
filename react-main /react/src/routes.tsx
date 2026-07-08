import { createBrowserRouter, Navigate } from 'react-router'
import Layout from './components/Layout'
import Login from './pages/Login'
import ProductsPage from './pages/Products/ProductsPage'
import ProductDetailPage from './pages/Products/ProductDetailPage'

const routes = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    Component: Layout,
    children: [
      {
        path: '/',
        element: <Navigate to="/products" replace />,
      },
      {
        path: '/products',
        Component: ProductsPage,
      },
      {
        path: '/products/:id',
        Component: ProductDetailPage,
      },
    ],
  },
])

export default routes
