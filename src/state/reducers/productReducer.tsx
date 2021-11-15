import { ActionType } from "../action-types";
import { Action, product } from '../actions'


interface IProduct {
  Products: product[],
  OneProduct: product
}


const initState:IProduct ={
  Products: [],
  OneProduct: {
    id: 0,
    imgUrl: "",
    longDescription: "",
    name: "",
    price: 0,
    shortDescription: "",
    subCategoryesId: 0
  }
}

const ProductReducer = (state:IProduct = initState, action: Action) => {
  switch(action.type){
    case ActionType.GET_PRODUCTS: 
      return {
      ...state,
      Products: action.payload
    }
    

    case ActionType.Get_ONE_PRODUCT:
      return {
        ...state,
        OneProduct: {
          id: action.payload.id,
          imgUrl: action.payload.imgUrl,
          longDescription: action.payload.longDescription,
          name: action.payload.name,
          price: action.payload.price,
          shortDescription: action.payload.shortDescription,
          subCategoryesId: action.payload.subCategoryesId,
        }
      }


    default:
      return state
  }
}


export default ProductReducer