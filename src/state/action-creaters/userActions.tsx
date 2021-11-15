import { ActionType } from '../action-types/index'
import axios from 'axios'

interface IregisterUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  // userAddresses: {
  //   address: string,
  //   zip: string,
  //   city: string
  // }
  address: string,
  zip: string,
  city: string
}

interface loggin {
  Email: string,
  Password: string
}

export const Loggin = (data:loggin) => {
  return(dispatch:any) => {
    axios.post('https://localhost:44373/api/Authentication/SignIn', data)
    .then(res => {
      // console.log(res.data)
      let answer = {
          Id: res.data.userId,
          Admin: res.data.Admin,
          Status: true
      }

      let Token = JSON.stringify(answer)
      localStorage.setItem('LoggedInUser', Token)
      dispatch(setLoggin(answer))

      let text = "";
      dispatch(setlogginError(text))
    })
    .catch(err => {

      dispatch(setlogginError(err.response.data.message))
    })
  }
}

export const CheckIfLoggedIn = () => {
  return(dispatch: any) => {

    let token:string|null = localStorage.getItem('LoggedInUser')
    if(token !== null) {
      let user = JSON.parse(token)
      dispatch(setLoggin(user))
    }else {
      console.log("Ingen är inloggad")
    }
  }
}

export const registerUser = (data:IregisterUser) => {
  return(dispatch: any) => {
    
    axios.post('https://localhost:44373/api/Authentication/SignUp', data)
    .then((res) => {

      let data = JSON.parse(res.data.value)
      let _token = {
        Id: data.userId,
        Admin: data.Admin,
        Status: true
      }
      let token = JSON.stringify(_token)
      localStorage.setItem('LoggedInUser', token)
      dispatch(CheckIfLoggedIn())
      let text = "";
      dispatch(setregisterError(text))
    })
    .catch(err => {
      dispatch(setregisterError(err.response.data.message))
    })
  }
}


export const loggOut = () => {
  return(dispatch:any) => {
    let data = {
      Id: 0,
      Admin: false,
      Status: false
    }
    dispatch(setLoggin(data))
    localStorage.removeItem('LoggedInUser')
  }
}


export const getAllUsers = () => {
  return(disptach: any) => {
    axios.get('https://localhost:44373/api/Users')
    .then(res => {
      // console.log(res.data)
      disptach(setAllUsers(res.data))
    })
    .catch(err => console.log(err))
  }
}
export const deleteUser = (id:number) => {
  return(dispatch: any) => {
    axios.delete('https://localhost:44373/api/Users/' + id)
    .then(res => {
      dispatch(getAllUsers())
    })
    .catch(err => console.log(err))
  }
}

export const setAdmin = (data:any) => {
  return(dispatch:any) => {

    let id = data.id;
    let admin = {
      admin: data.admin
    }

    axios.put('https://localhost:44373/api/users/' + id, admin)
    .then(res => {
      // console.log(res)

      dispatch(getAllUsers())
    })

  }
}
 














export const setLoggin = (data:any) => {
  return {
    type: ActionType.LOGGIN,
    payload: {
      Id: data.Id,
      Admin: data.Admin,
      Status: data.Status
    }
  }
}

export const setregisterError = (text: string) => {
  return {
    type: ActionType.REGISTER_ERROR_MSG,
    payload: text
  }
}
export const setlogginError = (text: string) => {
  return {
    type: ActionType.LOGGIN_ERROR_MSG,
    payload: text
  }
}

export const setAllUsers = (data:any) => {
  // console.log(data)
  return {
    type: ActionType.GET_ALL_USERS,
    payload: data
  }
}