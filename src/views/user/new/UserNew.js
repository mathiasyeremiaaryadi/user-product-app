import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useDispatch } from 'react-redux'
import { createUser, getUsers } from 'src/actions/userActions'
import { useNavigate } from 'react-router-dom'

const UserNew = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState(false)
  const [password, setPassword] = useState('')

  const handleUserSubmit = (event) => {
    event.preventDefault()
    const userBody = {
      username: username,
      email: email,
      phone: phone,
      role: role,
      status: status,
      password: password,
    }

    dispatch(createUser(userBody))

    setUsername('')
    setEmail('')
    setPhone('')
    setRole('')
    setStatus(false)
    setPassword('')

    navigate('/user/list')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create New User Form</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleUserSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="username">Username</CFormLabel>
                <CFormInput
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="email">Email</CFormLabel>
                <CFormInput
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="phone">Phone</CFormLabel>
                <CFormInput
                  type="text"
                  id="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="role">Role</CFormLabel>
                <CFormInput
                  type="text"
                  id="role"
                  value={role}
                  placeholder="Role"
                  onChange={(event) => setRole(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="status">Status</CFormLabel>
                <CFormSelect
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value === 'true')
                  }}
                >
                  <option value="false">Not Activated</option>
                  <option value="true">Activated</option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="password">Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Pasword"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CButton color="primary" type="submit">
                  Create New User
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserNew
