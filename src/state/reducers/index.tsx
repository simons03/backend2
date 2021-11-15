import { combineReducers } from "redux";
import  productReducer  from './productReducer'
import  UserReducer  from './userReducer'
import  CartReducer from "./cartReducer";
import OrderReducer from "./orderReducer";




const reducers = combineReducers({
  productReducer,
  UserReducer,
  CartReducer,
  OrderReducer
})

export default reducers

export type State = ReturnType<typeof reducers>