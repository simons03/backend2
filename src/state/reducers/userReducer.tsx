import { ActionType } from "../action-types";
import { Action } from '../actions'

interface alluser {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  admin: boolean,
  userAddressesId: number
}

interface IUser {
  UserId: number,
  Admin: boolean,
  LoggedIn: boolean,
  LogginError: string,
  RegisterError: string,
  AllUsers: alluser[]
}

const initState:IUser ={
  UserId: 0,
  Admin: false,
  LoggedIn: false,
  LogginError: "",
  RegisterError: "",
  AllUsers: []
}

const UserReducer = (state:IUser = initState, action: Action) => {

  switch(action.type){
    case ActionType.LOGGIN: 
    // console.log(action.payload.Id)
    return {
      ...state,
      UserId: action.payload.Id,
      Admin: action.payload.Admin,
      LoggedIn: action.payload.Status
    }

    case ActionType.LOGGIN_ERROR_MSG:
      return {
        ...state,
        LogginError: action.payload
      }

    case ActionType.REGISTER_ERROR_MSG: 
    return {
      ...state, 
      RegisterError: action.payload
    }

    case ActionType.GET_ALL_USERS:
      return {
        ...state,
        AllUsers: action.payload
      }



    default:
      return state
  }

}


export default UserReducer