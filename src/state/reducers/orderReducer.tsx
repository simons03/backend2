import { ActionType } from "../action-types";
import { Action } from "../actions";

interface orders {
  id: number,
  usersId: number,
  orderDate: string,
  status: string,
  userAddressesId: number,
  totalAmount: number,
}

interface orderlines {
  id: number,
  ordersId: number,
  productsId: number,
  quantity: number,
  unitPrice: number
}
interface ordersAndOrderlines {
  id: number,
  usersId: number,
  orderDate: string,
  status: string,
  userAddressesId: number,
  totalAmount: number,
  oderLines: orderlines[]
}

interface IOrders {
  orders: orders[],
  order: ordersAndOrderlines,
}

const initState:IOrders = {
  orders: [],
  order: {
    id: 0,
    usersId: 0,
    orderDate: "",
    status: "",
    userAddressesId: 0,
    totalAmount: 0,
    oderLines: []
  }

}

const OrderReducer = (state:IOrders = initState, action:Action) => {

  switch(action.type) {
    case ActionType.GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload
      }

      case ActionType.SET_ORDER:
        return {
          ...state,
          order: action.payload
        }



    default:
      return state
  }

}



export default OrderReducer