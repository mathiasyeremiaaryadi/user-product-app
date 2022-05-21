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
import { createUser } from 'src/actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import swal from 'sweetalert'

const UserNew = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().typeError('phone must be number').positive().integer().required(),
    role: yup.string().oneOf(['admin', 'user']).required(),
    password: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onCreateUser = (data) => {
    const userBody = {
      ...data,
      phone: data.phone.toString(),
      status: data.status === '0' ? false : true,
    }

    dispatch(createUser(userBody))
      .then((response) => {
        reset()
        swal({
          title: 'Success!',
          text: response.message,
          icon: 'success',
          button: 'OK',
        }).then(() => {
          navigate('/user/list')
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

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create New User Form</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit(onCreateUser)}>
              <div className="mb-3">
                <CFormLabel>Username</CFormLabel>
                <CFormInput
                  {...register('username')}
                  placeholder="Username"
                  feedback={errors.username?.message}
                  invalid={errors.username && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Email</CFormLabel>
                <CFormInput
                  {...register('email')}
                  placeholder="Email"
                  feedback={errors.email?.message}
                  invalid={errors.email && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Phone</CFormLabel>
                <CFormInput
                  {...register('phone')}
                  placeholder="Phone"
                  feedback={errors.phone?.message}
                  invalid={errors.phone && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Role</CFormLabel>
                <CFormInput
                  {...register('role')}
                  placeholder="Role"
                  feedback={errors.role?.message}
                  invalid={errors.role && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Status</CFormLabel>
                <CFormSelect {...register('status')} defaultValue="0">
                  <option value="0">Not Activated</option>
                  <option value="1">Activated</option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel>Password</CFormLabel>
                <CFormInput
                  type="password"
                  {...register('password')}
                  placeholder="Pasword"
                  feedback={errors.password?.message}
                  invalid={errors.password && true}
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
