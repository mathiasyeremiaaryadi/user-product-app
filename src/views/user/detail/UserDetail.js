import React, { useEffect } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'src/actions/userActions'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
  const { user, message } = useSelector((state) => state.user)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch, id, message])

  if (!user) {
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>User Detail</CCardHeader>
            <CCardBody></CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>User Detail</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>
                <strong>Username</strong>
              </CListGroupItem>
              <CListGroupItem>{user.username}</CListGroupItem>
              <CListGroupItem>
                <strong>Email</strong>
              </CListGroupItem>
              <CListGroupItem>{user.email}</CListGroupItem>
              <CListGroupItem>
                <strong>Phone</strong>
              </CListGroupItem>
              <CListGroupItem>{user.phone}</CListGroupItem>
              <CListGroupItem>
                <strong>Status</strong>
              </CListGroupItem>
              <CListGroupItem>
                {user.status ? (
                  <CBadge color="success" shape="rounded-pill">
                    Activated
                  </CBadge>
                ) : (
                  <CBadge color="danger" shape="rounded-pill">
                    Not Activated
                  </CBadge>
                )}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Role</strong>
              </CListGroupItem>
              <CListGroupItem>{user.role}</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserDetail
