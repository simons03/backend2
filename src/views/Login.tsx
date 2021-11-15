import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../state'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { UserActions } from '../state'

const Login = (props:any) => {

  const dispatch = useDispatch();
  const { Loggin } = bindActionCreators(UserActions, dispatch)

  const LogginErrorMessage = useSelector((state:State) => state.UserReducer.LogginError)
  const loggedin = useSelector((state:State) => state.UserReducer.LoggedIn)
  
  useEffect(() => {
    if(loggedin){
      props.history.push('/')
    }
  },[props.history,loggedin]) 


  let [loggInData , setLoggInData ] = useState({
    Email: "",
    Password: ""
  })

  const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
    setLoggInData({
      ...loggInData,
      Email: e.target.value
    })
  }

  const handlePassword = (e:ChangeEvent<HTMLInputElement>) => {
    setLoggInData({
      ...loggInData,
      Password: e.target.value
    })
  }

  const submit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(loggInData.Email !== "" && loggInData.Password !== ""){
      Loggin(loggInData)

      setLoggInData({
        ...loggInData,
        Password: ""
      })

    } else {
      console.log("Du måste fylla i allt")
    }
  }


  const hahs = () => {
    console.log(LogginErrorMessage)
  }



  return (
    <div className="Login fullpage">
      <div className="formHolder border">
        <h1>Logga in</h1>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={loggInData.Email} onChange={handleEmail} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={loggInData.Password} onChange={handlePassword} />
          </div>
          <div className="d-flex button-holder">
            <button type="submit" className="btn btn-primary">Logga in</button>
            <p className="mt-2">Inget konto? Registrera dig <NavLink to="/Register">  här! </NavLink> </p>

          </div>
          <span onClick={hahs} className="logginErrorMessage" > {LogginErrorMessage} </span>
        </form>

        {/* <button onClick={agaasdg}>Kolla min state</button> */}
      </div>
      
    </div>
  )
}

export default Login
