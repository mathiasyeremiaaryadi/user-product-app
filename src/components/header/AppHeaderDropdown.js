import React, { useEffect } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilAccountLogout } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from 'src/actions/authActions'

const AppHeaderDropdown = () => {
  const { authenticatedUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const onUserLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem style={{ cursor: 'pointer' }}>{authenticatedUser.username}</CDropdownItem>
        <CDropdownItem style={{ cursor: 'pointer' }}>Role: {authenticatedUser.role}</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={onUserLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
