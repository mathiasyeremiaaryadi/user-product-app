import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCart, cilSpeedometer, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'User',
    to: '/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create New User',
        to: '/user/new',
      },
      {
        component: CNavItem,
        name: 'User List',
        to: '/user/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Product',
    to: '/product',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create New Product',
        to: '/product/new',
      },
      {
        component: CNavItem,
        name: 'Product List',
        to: '/product/list',
      },
    ],
  },
]

export default _nav
