import { ActionType } from "../action-types"
import { Action, cart } from "../actions"


interface Icart {
  cart: cart[],
  totalPrice: number,
  totalQuantity: number
}



const initState:Icart ={
  cart: [],
  totalPrice: 0,
  totalQuantity: 0
}

const CartReducer = (state:Icart = initState, action:Action) => {

  let produtexists;

  switch(action.type){
    case ActionType.ADD_TO_CART: 
    try {

      produtexists = state.cart.findIndex(product => product.id === action.payload.id)
      produtexists < 0 
      ? state.cart = [...state.cart, action.payload]
      : state.cart[produtexists].quantity += 1

      state.totalPrice = calcTotalPrice(state.cart);
      state.totalQuantity = calcTotalQuantity(state.cart);

    }
    catch(err) {
      console.log(err)
    }
    return {...state}




    case ActionType.INCREMENT_PRODUCT: 
    let increment = state.cart.map(product => {
      if(product.id === action.payload) {
        product.quantity++
        return product
      }
      return product
    })

    state.totalPrice = calcTotalPrice(state.cart);
    state.totalQuantity = calcTotalQuantity(state.cart);
    return {...state,
      cart: increment
    }


    case ActionType.DECREMENT_PRODUCT: 

    try {
      produtexists = state.cart.findIndex(product => product.id === action.payload)
      state.cart[produtexists].quantity === 1
      ? state.cart = state.cart.filter(product => product.id !== action.payload)
      : state.cart[produtexists].quantity -= 1
      state.totalPrice = calcTotalPrice(state.cart);
      state.totalQuantity = calcTotalQuantity(state.cart);
    }
    catch(err) {
      console.log(err)
    }
    return {...state}

    case ActionType.DELETE_PRODUCT_FROM_CARD:
      state.cart = state.cart.filter(product => product.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.cart);
      state.totalQuantity = calcTotalQuantity(state.cart);

    return {...state}


    case ActionType.EMTY_CART: 
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      return {...state,}

    default:
      return state
  }
}



const calcTotalPrice = (cart:cart[]) => {
  let total = 0

  cart.forEach(product => {
    // console.log(product.price)
    // total += product.price
    total += product.price * product.quantity
  })
  // console.log(total)
  return total
}

const calcTotalQuantity = (cart:cart[]) => {
  let total = 0
  // console.log(cart)

  cart.forEach(product => {
    // console.log(product.price)
    // total += product.price
    total += product.quantity
  })
  // console.log(total)
  return total
}


export default CartReducer