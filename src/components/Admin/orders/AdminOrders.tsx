import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { OrderActions, State } from '../../../state'
import AdminOrdersCard from './AdminOrdersCard'

const AdminOrders = () => {

  const dispatch = useDispatch();

  const { getAllOrders } = bindActionCreators(OrderActions, dispatch);

  useEffect(() => {
    getAllOrders()
     /* eslint-disable */
  },[])

  const allOrders = useSelector((state:State) => state.OrderReducer.orders)

  const axios = () => {
    getAllOrders()
  }
  const state = () => {
    console.log(allOrders)
  }

  return (
    <div className="AdminOrders">
      <h1>All Orders</h1>

      <div>
        <table className="table">
          <tbody>

          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Status</th>
            <th>UserId</th>
            <th>TotalPris</th>
          </tr>

          {
            allOrders? 
            allOrders.map(order => {
              return (
                <AdminOrdersCard key={order.id} order={order} />
              )
            })
            : <h2 className="text-center">Finns inga Ordrar här</h2>
          }





          </tbody>
        </table>

        {/* <button onClick={axios}>axios</button>
        <button onClick={state}>check state</button> */}
      </div>
    </div>
  )
}

export default AdminOrders
