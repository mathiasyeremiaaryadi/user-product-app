import React from 'react'

import { CBadge, CCard, CCardBody, CCol, CListGroup, CListGroupItem, CRow } from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow className="justify-content-center">
            <CCol md={6}>
              <h4 id="traffic" className="card-title mb-0 text-center">
                Welcome to User and Product Management
              </h4>
            </CCol>
          </CRow>
          <CRow className="justify-content-center">
            <CCol md={4} className="mt-4">
              <CListGroup>
                <CListGroupItem>
                  <CBadge color="success" className="me-3" shape="rounded-pill">
                    CREATE
                  </CBadge>{' '}
                  New <strong>User</strong> Data
                </CListGroupItem>
                <CListGroupItem>
                  <CBadge color="primary" className="me-3" shape="rounded-pill">
                    READ
                  </CBadge>{' '}
                  Retrieve or Read <strong>User</strong> Data
                </CListGroupItem>
                <CListGroupItem>
                  <CBadge color="warning" className="me-3" shape="rounded-pill">
                    UPDATE
                  </CBadge>{' '}
                  Update <strong>User</strong> Data
                </CListGroupItem>
                <CListGroupItem>
                  <CBadge color="danger" className="me-3" shape="rounded-pill">
                    DELETE
                  </CBadge>{' '}
                  Delete <strong>User</strong> Data
                </CListGroupItem>
              </CListGroup>
            </CCol>
          </CRow>
          <CRow className="justify-content-center">
            <CCol md={4} className="mt-4 mb-4">
              <CListGroup>
                <CListGroupItem>
                  <CBadge color="success" className="me-3" shape="rounded-pill">
                    CREATE
                  </CBadge>{' '}
                  New <strong>Product</strong> Data
                </CListGroupItem>
                <CListGroupItem>
                  <CBadge color="primary" className="me-3" shape="rounded-pill">
                    READ
                  </CBadge>{' '}
                  Retrieve or Read <strong>Product</strong> Data
                </CListGroupItem>
                <CListGroupItem>
                  <CBadge color="warning" className="me-3" shape="rounded-pill">
                    UPDATE
                  </CBadge>{' '}
                  Update <strong>Product</strong> Data
                </CListGroupItem>
                <CListGroupItem>
                  <CBadge color="danger" className="me-3" shape="rounded-pill">
                    DELETE
                  </CBadge>{' '}
                  Delete <strong>Product</strong> Data
                </CListGroupItem>
              </CListGroup>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
