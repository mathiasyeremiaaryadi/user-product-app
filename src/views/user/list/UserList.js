import React, { useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilInfo } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from 'src/actions/userActions'

const UserList = () => {
  const { data } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const users = data

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>User List Table</CCardHeader>
          <CCardBody>
            {users ? (
              <CTable hover className="mt-4">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((user, index) => (
                    <CTableRow key={user.id}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{user.username}</CTableDataCell>
                      <CTableDataCell>{user.email}</CTableDataCell>
                      <CTableDataCell>{user.role}</CTableDataCell>
                      <CTableDataCell>
                        {user.status ? (
                          <CBadge color="success" shape="rounded-pill">
                            Activated
                          </CBadge>
                        ) : (
                          <CBadge color="danger" shape="rounded-pill">
                            Not Activated
                          </CBadge>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="info"
                          className="text-white"
                          component={Link}
                          to={`/user/${user.id}`}
                        >
                          <CIcon icon={cilInfo} /> Detail
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            ) : (
              <h4 className="text-center mt-4">No user is found</h4>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserList
