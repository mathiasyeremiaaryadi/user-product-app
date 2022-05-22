import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser } from 'src/actions/userActions'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import swal from 'sweetalert'

const UserEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams('id')
  const { user, message } = useSelector((state) => state.user)
  const options = [
    { value: '0', label: 'Not Activated' },
    { value: '1', label: 'Activated' },
  ]

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().typeError('phone must be number').positive().integer().required(),
    role: yup.string().oneOf(['admin', 'user']).required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  useEffect(() => {
    dispatch(getUser(id)).then(() => {
      setValue('username', user.username)
      setValue('email', user.email)
      setValue('phone', user.phone)
      setValue('role', user.role)
    })

    return () => {
      reset()
    }
  }, [dispatch, message, id])

  const onUpdateUser = (data) => {
    const userBody = {
      ...data,
      phone: `0${data.phone.toString()}`,
      status: data.status === '0' ? false : true,
    }

    dispatch(updateUser(id, userBody))
      .then((response) => {
        reset()
        swal({
          title: 'Success!',
          text: response.message,
          icon: 'success',
          button: 'OK',
        }).then(() => {
          reset()
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

  if (!user) {
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Update User Form</strong>
            </CCardHeader>
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
          <CCardHeader>
            <strong>Update User Form</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit(onUpdateUser)}>
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
                <Controller
                  name="status"
                  control={control}
                  defaultValue={user.status ? '1' : '0'}
                  render={({ field }) => <CFormSelect options={options} {...field} />}
                />
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
                  Update New User
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserEdit
