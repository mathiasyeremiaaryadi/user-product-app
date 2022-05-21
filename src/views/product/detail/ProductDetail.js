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
import { useParams } from 'react-router-dom'
import { getProduct } from 'src/actions/productActions'

const ProductDetail = () => {
  const { product } = useSelector((state) => state.product)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Product Detail</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>
                <strong>Name</strong>
              </CListGroupItem>
              <CListGroupItem>{product.name}</CListGroupItem>
              <CListGroupItem>
                <strong>Category</strong>
              </CListGroupItem>
              <CListGroupItem>{product.category}</CListGroupItem>
              <CListGroupItem>
                <strong>Description</strong>
              </CListGroupItem>
              <CListGroupItem>{product.description}</CListGroupItem>
              <CListGroupItem>
                <strong>Price</strong>
              </CListGroupItem>
              <CListGroupItem>Rp. {product.price}</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductDetail
