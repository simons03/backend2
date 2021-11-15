import axios from "axios"
import { ActionType } from "../action-types"
import { orders } from '../actions/index'

// interface order {
//   id: number,
//   usersId: number,
//   orderDate: string,
//   status: string,
//   userAddressesId: number,
//   totalAmount: number,
// }

// interface AllOrders {
//   array: order[]
// }

export const getAllOrders = () => {
  return(dispatch:any) => {
    axios.get("https://localhost:44373/api/Orders")
    .then(res => {
      dispatch(setAllOrders(res.data))
    })
    .catch(err => console.log(err))
  }
}

export const getOneOrder = (id: number) => {
  return(dispatch: any) => {
    axios.get("https://localhost:44373/api/Orders/" + id)
    .then(res => {
      dispatch(setOneOrder(res.data))
    })
  }
}

















export const setAllOrders = (data:orders[]) => {
  return{
    type: ActionType.GET_ALL_ORDERS,
    payload: data
  }
}
export const setOneOrder = (data:orders) => {
  return {
    type: ActionType.SET_ORDER,
    payload: data
  }
}
