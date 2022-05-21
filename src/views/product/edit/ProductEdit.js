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
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import swal from 'sweetalert'
import { getProduct, updateProduct } from 'src/actions/productActions'

const ProductEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams('id')
  const { product, message } = useSelector((state) => state.product)

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().typeError('price must be number').positive().integer().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  useEffect(() => {
    dispatch(getProduct(id)).then(() => {
      setValue('name', product.name)
      setValue('category', product.category)
      setValue('description', product.description)
      setValue('price', product.price)
    })

    return () => {
      reset()
    }
  }, [dispatch, message, id])

  const onUpdateProduct = (data) => {
    const productBody = { ...data }

    dispatch(updateProduct(id, productBody))
      .then((response) => {
        reset()
        swal({
          title: 'Success!',
          text: response.message,
          icon: 'success',
          button: 'OK',
        }).then(() => {
          navigate('/product/list')
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
            <strong>Create New Product Form</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit(onUpdateProduct)}>
              <div className="mb-3">
                <CFormLabel>Name</CFormLabel>
                <CFormInput
                  {...register('name')}
                  placeholder="Name"
                  feedback={errors.name?.message}
                  invalid={errors.name && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Category</CFormLabel>
                <CFormInput
                  {...register('category')}
                  placeholder="Category"
                  feedback={errors.category?.message}
                  invalid={errors.category && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Description</CFormLabel>
                <CFormInput
                  {...register('description')}
                  placeholder="Description"
                  feedback={errors.description?.message}
                  invalid={errors.description && true}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="price">Price (Rp)</CFormLabel>
                <CFormInput
                  {...register('price')}
                  placeholder="Price"
                  feedback={errors.price?.message}
                  invalid={errors.price && true}
                />
              </div>
              <div className="mb-3">
                <CButton color="primary" type="submit">
                  Create New Product
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductEdit
