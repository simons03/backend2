import React from 'react'
import { useHistory } from 'react-router'
import { orders } from '../../../state/actions'

interface IProps {
  order:orders
}


const AdminOrdersCard:React.FC<IProps> = ({order}) => {
  const history = useHistory()
  const setProductDetails = (id:number) => {
    history.push("/OrderDetails/" + id);
  }

  return (
    <tr className="AdminOrdersCard border" onClick={() => setProductDetails(order.id)} >
      <td> { order.id } </td>
      <td> { order.orderDate } </td>
      <td> { order.status } </td>
      <td> { order.usersId } </td>
      <td> { order.totalAmount } kr </td>
    </tr>
  )
}

export default AdminOrdersCard
