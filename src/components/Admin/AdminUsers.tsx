import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State, UserActions } from '../../state'
import UsersCard from './users/UsersCard'

const AdminUsers = () => {
  const dispatch = useDispatch()
  const { getAllUsers } = bindActionCreators(UserActions, dispatch)

  const AllUsers = useSelector((state: State) => state.UserReducer.AllUsers)

  useEffect(() => {
    getAllUsers()
    // console.log("FUCK IT")
     /* eslint-disable */
  },[])



  return (
    <div className="AdminUsers">
      <div className="">
        <h1>Users</h1>
        <table>
          <tbody>

          <tr>
            <th>Namn</th>
            <th>Email</th>
            <th>Admin</th>
            <th>ToggleAdmin</th>
            <th>RemoveUser</th>
          </tr>

          {
            AllUsers? 
            AllUsers.map(user => {
              return(
                <UsersCard key={user.id} user={user} />
              )
            })
            : <h1>Finns inga användare</h1>
          }

          </tbody>
        </table>
  
      </div>
    </div>
  )
}

export default AdminUsers
