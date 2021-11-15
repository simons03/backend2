import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { State, UserActions } from '../../state'
import { NavLink } from 'react-router-dom'
import  Logo  from '../../images/Logo/LoggaNetOnNet2.png'
import { bindActionCreators } from 'redux'

const Navbar = () => {

  const dispatch = useDispatch()
  const LoggedIn = useSelector((state:State) => state.UserReducer.LoggedIn)
  const Admin = useSelector((state:State) => state.UserReducer.Admin)
  const totalQuantity = useSelector((state:State) => state.CartReducer.totalQuantity)

  const { loggOut } = bindActionCreators(UserActions, dispatch)




  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <NavLink exact to="/"> 
        <img id="NavbarLogga" src={Logo} alt="" />
      </NavLink> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <NavLink exact to="/">Home</NavLink> 
          <NavLink exact to="/Shop">Shop</NavLink> 
          {
            Admin? 
            <NavLink exact to="/Admin">Admin</NavLink> 
            : 
            ""
          }

          {
            LoggedIn? 
            <NavLink exact to="/" onClick={loggOut}>Logout</NavLink> 
            :           
            <NavLink exact to="/Login">Login</NavLink> 
          }
          <NavLink exact to="/Cart" className="position-relative"><i className="fas fa-shopping-cart"></i><span className="position-absolute top-0 start-100 translate-middle hej badge rounded-pill bg-danger" style={{display: totalQuantity? "block" : "none"}}> { totalQuantity } </span></NavLink> 

        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
