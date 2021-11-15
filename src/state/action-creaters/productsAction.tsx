import { ActionType } from "../action-types";
import axios from "axios";
import { product, newProduct } from '../actions/index'

export const getProducts = () => {
  return(dispatch: any) => {

    axios.get('https://localhost:44373/api/Products')
    .then(res => {
      // console.log(res.data)
      dispatch(setProducts(res.data))
    })
    .catch(err => console.log(err))
  }
}

export const getOneProduct = (id: number) => {
  return(dispatch: any) => {
    axios.get('https://localhost:44373/api/Products/' + id)
    .then(res => {
      // console.log(res.data)

      dispatch(setOneProduct(res.data))

    })
  }
}

export const addOneProduct = (data: newProduct) => {
  return(dispatch: any) => {
    axios.post('https://localhost:44373/api/Products', data)
    .then(res => {
      // console.log(res.data)
      dispatch(getProducts())
      console.log("Din produkt är tillagd")
    })
    .catch(err => console.log(err))

  }
}





export const setProducts = (data:product[]) => {
  // console.log(data)
  return {
    type: ActionType.GET_PRODUCTS,
    payload: data
  }
}

export const setOneProduct = (data:product) => {
  return {
    type: ActionType.Get_ONE_PRODUCT,
    payload: data
  }
}