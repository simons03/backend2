import axios from "axios"
import { ActionType } from "../action-types"
import { cart } from "../actions"


interface icart {
  productId: number,
  quantity: number,
  price: number
}

interface AddOrder {
  usersId: number,
  totalAmount: number,
  cartProducts: icart[]
}

export const addToCart = (data: cart) => {
  return(dispatch:any) => {
    dispatch(setAddToCart(data))
  }
}

export const addOrder = (data:AddOrder) => {
  return(dispatch: any) => {
    // console.log(data)


    axios.post('https://localhost:44373/api/Orders', data)
    .then(res => {
      console.log("Din order är nu lagd")
      dispatch(emtyCart())
    })
    .catch(err => {
      console.log(err)
    })


  }
}



















export const setAddToCart = (data: cart) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: data
  }
}

export const setIncementProduct = (id:number) => {
  return {
    type: ActionType.INCREMENT_PRODUCT,
    payload: id
  }
}
export const setDecrementProduct = (id:number) => {
  return {
    type: ActionType.DECREMENT_PRODUCT,
    payload: id
  }
}
export const deliteProductFromCart = (id:number) => {
  return {
    type: ActionType.DELETE_PRODUCT_FROM_CARD,
    payload: id
  }
}

export const emtyCart = () => {
  return {
    type: ActionType.EMTY_CART
  }
}