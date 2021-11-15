import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserActions } from '../../../state'

interface user {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  admin: boolean,
  userAddressesId: number
}

interface Iprops{
  user: user
}


const UsersCard:React.FC<Iprops> = ({user}) => {
  const dispatch = useDispatch()
  const { deleteUser, setAdmin } = bindActionCreators(UserActions, dispatch)

  const test = () => {
    // console.log("ghadgasgd")
    console.log(user.admin)

    let data = {
      id: user.id,
      admin: !user.admin
    }
      setAdmin(data)
  }
  


  // console.log(user)
  return (
    <tr className="UsersCard border">
      <td>{ `${user.firstName} ${user.lastName}` } </td>
      <td>{ user.email }</td>
      <td> { user.admin? "Admin" : "Member" } </td>
      <td><button className="btn btn-info" onClick={test}>ToggleAdmin</button></td>
      <td><button className="btn btn-danger" onClick={() => deleteUser(user.id)}>X</button></td>
    </tr>
  )
}

export default UsersCard
