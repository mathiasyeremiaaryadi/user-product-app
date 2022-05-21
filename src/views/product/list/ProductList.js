import React, { useEffect } from 'react'
import {
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
import { deleteProduct, getProducts } from 'src/actions/productActions'
import swal from 'sweetalert'

const ProductList = () => {
  const { products, message } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch, message])

  const onProductDelete = (id) => {
    swal({
      title: 'Confirmation!',
      text: 'Are you sure want to delete this product?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((isConfirmDelete) => {
      if (isConfirmDelete) {
        dispatch(deleteProduct(id))
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

  if (products.length === 0) {
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>Product List Table</CCardHeader>
            <CCardBody>
              <h4 className="text-center mt-4">No product is found</h4>
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
          <CCardHeader>Product List Table</CCardHeader>
          <CCardBody>
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
                      <div className="d-grid gap-2 d-xl-block">
                        <CButton
                          color="danger"
                          className="text-white me-xl-2"
                          onClick={() => onProductDelete(product.id)}
                        >
                          <CIcon icon={cilTrash} /> Delete
                        </CButton>
                        <CButton
                          color="info"
                          className="text-white me-xl-2"
                          component={Link}
                          to={`/product/${product.id}`}
                        >
                          <CIcon icon={cilInfo} /> Detail
                        </CButton>
                        <CButton
                          color="warning"
                          className="text-white"
                          component={Link}
                          to={`/product/edit/${product.id}`}
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

export default ProductList
