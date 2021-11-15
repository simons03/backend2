import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import AdminProduct from '../../components/Admin/AddNewProduct'
import AdminUsers from '../../components/Admin/AdminUsers'
import AdminOrders from '../../components/Admin/orders/AdminOrders'
import { State } from '../../state'

const AdminHomePage = () => {

  const IsAdmin = useSelector((state:State) => state.UserReducer.Admin)

  // let prod:any = document.querySelector('.prod')
  // let use:any = document.querySelector('.use')
  let [status, setStatus] = useState("")
  // let [toggle, setToggle] = useState(false);

  // const swtichToggle = () => {
  //   setToggle(!toggle)
  // }


  const products = () => {
    setStatus(status = 'products')
    // swtichToggle()
  }
  const users = () => {
    setStatus(status = 'users')
    // swtichToggle()
  }
  const orders = () => {
    setStatus(status = 'orders')
    // swtichToggle()
  }

  useEffect(() => {
    setStatus('products')
    // swtichToggle()
  }, [setStatus])


  const switchAdmin = () => {

    if(status === 'products') {
      // prod.classList.add('text-white')
      // prod.classList.add('underline')
      // use.classList.remove('text-white')
      return <AdminProduct />
    }
    if(status === 'users') {
      // prod.classList.remove('text-white')
      // use.classList.add('text-white')
      return <AdminUsers />
    }
    if(status === 'orders') {

      return <AdminOrders />
    }
    else {
      return ""
    }
  }
  


  return (
    <div className="AdminHomePage">
      {
        IsAdmin?
        <div className="container">
          {/* <h1 className="text-center mt-4">Admin</h1> */}

          {/* <ul>
            <li><NavLink exact to="/AddProduct">Add Product</NavLink></li>
            <li><NavLink exact to="/">Remove Product</NavLink></li>
            <li><NavLink exact to="/">Manage Users</NavLink></li>
          </ul> */}





        <div className="my-5">
          <ul className="list-inline mb-0 admin-ul col-6 d-flex justify-content-between align-items-center">        
            <div>
              <li id="prod" className="prod list-inline-item pointer text-hover h3" onClick={products}>Products</li>
              <li id="use" className="use list-inline-item pointer text-hover h3 " onClick={users}>Users</li>
              <li id="ord" className="ord list-inline-item pointer text-hover h3 " onClick={orders}>Orders</li>
            </div>
            <h1 className="text-center mt-4">Admin</h1>
          </ul>  
          <div className="admin-toggle shadow-2">
            {
              switchAdmin()
            }
          </div>
        </div>





















{/* 

          <div>
            <AddNewProduct />
          </div> */}














        </div>
        : <h1 className="text-center mt-4">Du har inte rätt behörighet för att vara här</h1>
      }
    </div>
  )
}

export default AdminHomePage
