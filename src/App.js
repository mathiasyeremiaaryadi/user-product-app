import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthPersistentMiddleware from './components/AuthPersistentMiddleware'
import AuthReverseMiddleware from './components/AuthReverseMiddleware'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const AuthMiddleware = React.lazy(() => import('./components/AuthMiddleware'))

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/auth/login/Login'))
const Register = React.lazy(() => import('./views/auth/register/Register'))
const Page404 = React.lazy(() => import('./views/page404/Page404'))
const Page500 = React.lazy(() => import('./views/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />

            <Route element={<AuthPersistentMiddleware />}>
              <Route element={<AuthReverseMiddleware />}>
                <Route exact path="/login" name="Login Page" element={<Login />} />
                <Route exact path="/register" name="Register Page" element={<Register />} />
              </Route>

              <Route element={<AuthMiddleware />}>
                <Route path="*" name="Home" element={<DefaultLayout />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
