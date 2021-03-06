import React, { useEffect } from 'react'
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
import { cilInfo, cilPencil, cilTrash } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getUsers } from 'src/actions/userActions'
import swal from 'sweetalert'

const UserList = () => {
  const { users, message } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    isMounted && dispatch(getUsers())

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [dispatch, message])

  const onUserDelete = (id) => {
    swal({
      title: 'Confirmation!',
      text: 'Are you sure want to delete this user?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((isConfirmDelete) => {
      if (isConfirmDelete) {
        dispatch(deleteUser(id))
          .then((response) => {
            swal({
              title: 'Success!',
              text: response.message,
              icon: 'success',
              button: 'OK',
            })
          })
          .catch((error) => {
            swal({
              title: 'Failed!',
              text: error.message,
              icon: 'error',
              button: 'OK',
            })
          })
      }
    })
  }

  if (users.length === 0) {
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>User List Table</CCardHeader>
            <CCardBody>
              <h4 className="text-center mt-4">No user is found</h4>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>User List Table</CCardHeader>
          <CCardBody>
            <CTable responsive hover className="mt-4">
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
                      <div className="d-grid gap-2 d-xl-block">
                        <CButton
                          color="danger"
                          className="text-white me-xl-2"
                          onClick={() => onUserDelete(user.id)}
                        >
                          <CIcon icon={cilTrash} /> Delete
                        </CButton>
                        <CButton
                          color="info"
                          className="text-white me-xl-2"
                          component={Link}
                          to={`/user/${user.id}`}
                        >
                          <CIcon icon={cilInfo} /> Detail
                        </CButton>
                        <CButton
                          color="warning"
                          className="text-white"
                          component={Link}
                          to={`/user/edit/${user.id}`}
                        >
                          <CIcon icon={cilPencil} /> Update
                        </CButton>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserList
