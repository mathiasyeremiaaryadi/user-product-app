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
import { cilInfo, cilTrash } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, getProducts } from 'src/actions/productActions'

const ProductList = () => {
  const { products, message } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch, message])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Product List Table</CCardHeader>
          <CCardBody>
            {products ? (
              <CTable hover className="mt-4">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {products.map((product, index) => (
                    <CTableRow key={product.id}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{product.name}</CTableDataCell>
                      <CTableDataCell>{product.category}</CTableDataCell>
                      <CTableDataCell>
                        Rp. {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="info"
                          className="text-white"
                          component={Link}
                          to={`/product/${product.id}`}
                        >
                          <CIcon icon={cilInfo} /> Detail
                        </CButton>
                        <CButton
                          color="danger"
                          className="text-white ms-2"
                          onClick={() => dispatch(deleteProduct(product.id))}
                        >
                          <CIcon icon={cilTrash} /> Delete
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            ) : (
              <h4 className="text-center mt-4">No product is found</h4>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductList
