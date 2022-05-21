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
import { useNavigate } from 'react-router-dom'
import { createProduct } from 'src/actions/productActions'

const ProductNew = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const handleProductSubmit = (event) => {
    event.preventDefault()
    const productBody = {
      name,
      category,
      description,
      price: parseInt(price),
    }

    dispatch(createProduct(productBody))

    setName('')
    setCategory('')
    setDescription('')
    setPrice('')

    navigate('/product/list')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create New Product Form</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleProductSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput
                  id="name"
                  value={name}
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="category">Category</CFormLabel>
                <CFormInput
                  id="category"
                  value={category}
                  placeholder="Category"
                  onChange={(event) => setCategory(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="description">Description</CFormLabel>
                <CFormInput
                  id="description"
                  value={description}
                  placeholder="Description"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="price">Price (Rp)</CFormLabel>
                <CFormInput
                  id="price"
                  value={price}
                  placeholder="Price"
                  onChange={(event) => setPrice(event.target.value)}
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

export default ProductNew
