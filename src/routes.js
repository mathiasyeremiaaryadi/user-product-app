import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))

// User
const UserNew = React.lazy(() => import('./views/user/new/UserNew'))
const UserList = React.lazy(() => import('./views/user/list/UserList'))
const UserDetail = React.lazy(() => import('./views/user/detail/UserDetail'))

// Product
const ProductNew = React.lazy(() => import('./views/product/new/ProductNew'))
const ProductList = React.lazy(() => import('./views/product/list/ProductList'))
const ProductDetail = React.lazy(() => import('./views/product/detail/ProductDetail'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', element: Home },
  // User
  { path: '/user', exact: true, name: 'User', element: UserList },
  { path: '/user/new', name: 'Create New User', element: UserNew },
  { path: '/user/list', name: 'User List', element: UserList },
  { path: '/user/:id', name: 'User Detail', element: UserDetail },
  // Product
  { path: '/product', exact: true, name: 'Product', element: ProductList },
  { path: '/product/new', name: 'Create New Product', element: ProductNew },
  { path: '/product/list', name: 'Product List', element: ProductList },
  { path: '/product/:id', name: 'Product Detail', element: ProductDetail },
]

export default routes
