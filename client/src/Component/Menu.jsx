import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { toast } from 'react-toastify'
import axios from 'axios'

function Menu() {
    const context = useAuth()
    const navigate = useNavigate()

    // logout handler
    const logouthandler = async () => {
        try {
            if(window.confirm(`Are you sure to logout ?`)) {
                await axios.get('/api/auth/logout')
                .then(res => {
                    toast.success(res.data.msg)
                    sessionStorage.removeItem("token")
                    context.setIsLogin(false)
                    context.setToken(false)
                    context.setUser(false)
                    navigate('/')
                })
            } else {
                toast.warning("logout terminated")
            }
        } catch (err) {
            toast.error(err.message)
        }
    }


    return (
     <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
      <div className="container">
          <NavLink to={'/'} className="navbar-brand">Final Project</NavLink>
  
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
              <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-between" id="menu">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <NavLink to={'/'} className="nav-link">Home</NavLink>
                  </li>
                  </ul>
                  {
  context.isLogin && context.token ? (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          Account <i className="bi bi-person-circle"></i>
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to={`/dashboard`}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to={`/profile`}>
              Profile
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`/logout`} onClick={logouthandler}>
          LogOut <i className="bi bi-box-arrow-right"></i>
        </NavLink>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={`/login`} className="nav-link" >
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={`/register`} className="nav-link">
          Register
        </NavLink>
      </li>
    </ul>
  )
}

          </div>
      </div>
     </nav>
    )
  }
  
  export default Menu