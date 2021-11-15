import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import OrderDetailsCard from '../../components/Admin/orders/OrderDetailsCard';
import { OrderActions, State } from '../../state';

interface data {
  id: string
}

const OrderDetails = () => {

  const data:data = useParams();
  const dispatch = useDispatch()
  const { getOneOrder } = bindActionCreators(OrderActions, dispatch);


  const order = useSelector((state: State) => state.OrderReducer.order)


  useEffect(() => {
    let id = data.id
    let newId = parseInt(id)
    // console.log(newId)
    getOneOrder(newId)
    /* eslint-disable */
  }, [])




  return (
    <div className="OrderDetails">
      <div className="container">

        <h1 className="text-center mt-5">Order Details</h1>

        <div className="d-flex">
          <div className="block block1 border">

            {
              order? 
              order.oderLines.map(orderline => {
                return (
                  <OrderDetailsCard key={orderline.id} orderline={orderline} />
                )
              })
              : <h1>Det finns inga ordrar</h1>
            }

          </div>


          <div className="block block2 border">
            <h2 className="text-center mt-5">OrderInfo</h2>
            <div className="infoHolder mt-5">

              <div className="d-flex align-items-center justify-content-between">
                <p className="h5">Status:</p>
                <p className="h5"> { order.status } </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="h5">Order Datum:</p>
                <p className="h5"> { order.orderDate } </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="h5">Användar Id:</p>
                <p className="h5"> { order.usersId } </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="h5">TotalPrice:</p>
                <p className="h5"> { order.totalAmount } Kr </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderDetails
