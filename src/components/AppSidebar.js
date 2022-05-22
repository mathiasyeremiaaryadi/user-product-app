import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { changeFoldable, changeVisible } from 'src/actions/sidebarAction'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const { sidebarShow, sidebarUnfoldable } = useSelector((state) => state.sidebar)

  return (
    <CSidebar
      position="fixed"
      unfoldable={sidebarUnfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => dispatch(changeVisible(!visible))}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <strong>User & Product Management</strong>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(changeFoldable(!sidebarUnfoldable))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
