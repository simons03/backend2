import { ActionType } from "../action-types";

export interface product {
  id: number,
  imgUrl: string,
  longDescription: string,
  name: string,
  price: number,
  shortDescription: string,
  subCategoryesId: number
}
export interface newProduct {
  imgUrl: string,
  longDescription: string,
  name: string,
  price: number,
  shortDescription: string,
  subCategoryesId: number
}

interface GetOneProduct {
  type: ActionType.Get_ONE_PRODUCT,
  payload: product
}

interface IProduct {
  type: ActionType.GET_PRODUCTS,
  payload: product[]
}




/* Users */
export interface registerUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  userAddresses: {
    adress: string,
    zip: string,
    city: string
  }
}

interface registerError {
  type: ActionType.REGISTER_ERROR_MSG,
  payload: string
}

interface logginErrormsg {
  type: ActionType.LOGGIN_ERROR_MSG,
  payload: string
}

interface userId {
  type: ActionType.SET_USERID,
  payload: number
}

interface loggin {
  type: ActionType.LOGGIN,
  payload: {
    Id: number, 
    Admin: boolean,
    Status: boolean
  }
}

export interface getUsers {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  admin: boolean,
  userAddressesId: number
}
interface getAllUsers {
  type: ActionType.GET_ALL_USERS,
  payload: getUsers[]
}
/* Slut Users */



/* Cart */

export interface cart {
  id: number
  imgUrl: string
  name: string
  price: number,
  quantity: number
}

interface addToCart{
  type: ActionType.ADD_TO_CART,
  payload: cart
}

interface incrementProduct {
  type: ActionType.INCREMENT_PRODUCT,
  payload: number
}
interface decrementProduct {
  type: ActionType.DECREMENT_PRODUCT,
  payload: number
}
interface deleteProductFromCard {
  type: ActionType.DELETE_PRODUCT_FROM_CARD,
  payload: number
}

interface emtyCart {
  type: ActionType.EMTY_CART
}

/* Slut Cart */





/* Orders */

export interface orders {
  id: number,
  usersId: number,
  orderDate: string,
  status: string,
  userAddressesId: number,
  totalAmount: number,
}

interface GetAllOrders {
  type: ActionType.GET_ALL_ORDERS,
  payload: orders[]
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

interface setOrder {
  type: ActionType.SET_ORDER,
  payload: ordersAndOrderlines
}

interface setOrderProdct {
  type: ActionType.SET_ORDER_PRODUCT,
  payload: product
}



/* Slut Orders */




export type Action = 

IProduct | 
userId | 
loggin | 
GetOneProduct | 
addToCart | 
incrementProduct |
decrementProduct | 
deleteProductFromCard |
registerError |
logginErrormsg|
getAllUsers|
GetAllOrders|
setOrder|
setOrderProdct |
emtyCart
